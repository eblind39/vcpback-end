import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {ConfigService} from '@nestjs/config'
import {UserService} from 'src/user/user.service'
import {PostgresErrorCode} from '../common/database/postgresErrorCodes.enum'
import {JwtService} from '@nestjs/jwt'
import {TokenPayload} from './tokenPayload.interface'
import * as bcrypt from 'bcrypt'
import {CreateUserDto} from '../user/user.dto'

@Injectable()
export class AuthenticationService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
    ) {}

    public getCookieWithJwtToken(userId: number, name: string) {
        const payload: TokenPayload = {userId, name} // , name

        const token = this.jwtService.sign(payload)
        return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get<number>(
            'JWT_EXPIRATION_TIME',
        )}s`
    }

    public async register(registrationData: CreateUserDto) {
        const saltRounds: number =
            this.configService.get<number>('BCRYPT_SALT_ROUNDS')

        const salt = bcrypt.genSaltSync(Number(saltRounds))
        const hashedPassword = bcrypt.hashSync(registrationData.password, salt)

        try {
            const createdUser = await this.userService.create({
                ...registrationData,
                password: hashedPassword,
            })
            createdUser.password = undefined
            return createdUser
        } catch (error) {
            console.log(error)
            if (error?.code === PostgresErrorCode.UniqueValidation) {
                throw new HttpException(
                    'Email already in use',
                    HttpStatus.BAD_REQUEST,
                )
            }
            throw new HttpException(
                'Something went wrong',
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    public async getAuthenticatedUser(
        email: string,
        plainTextPassword: string,
    ) {
        try {
            const user = await this.userService.getByEmail(email)
            await this.verifyPassword(plainTextPassword, user.password)
            user.password = undefined
            return user
        } catch (error) {
            throw new HttpException(
                'Incorrect email or password',
                HttpStatus.BAD_REQUEST,
            )
        }
    }

    private async verifyPassword(
        plainTextPassword: string,
        hashedPassword: string,
    ) {
        const isPasswordMatching = await bcrypt.compare(
            plainTextPassword,
            hashedPassword,
        )

        if (!isPasswordMatching) {
            throw new HttpException(
                'Incorrect email or password',
                HttpStatus.BAD_REQUEST,
            )
        }
    }

    public getCookieForLogOut() {
        return `Authentication=; HttpOnly=; Max-Age=0`
    }
}
