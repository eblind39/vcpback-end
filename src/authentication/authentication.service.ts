import {HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common'
import {ConfigService} from '@nestjs/config'
import {UserService} from 'src/user/user.service'
import RegisterDto from './resgister.dto'
import {PostgresErrorCode} from '../common/database/postgresErrorCodes.enum'
import {JwtService} from '@nestjs/jwt'
import {TokenPayload} from './tokenPayload.interface'
const bcrypt = require('bcrypt')

@Injectable()
export class AuthenticationService {
    @Inject(ConfigService)
    private readonly config: ConfigService

    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
    ) {}

    public getCookieWithJwtToken(userId: number) {
        const payload: TokenPayload = {userId}
        const token = this.jwtService.sign(payload)
        return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get<string>(
            'JWT_EXPIRATION_TIME',
        )}`
    }

    public async register(registrationData: RegisterDto) {
        const saltRounds: number = this.config.get<number>('BCRYPT_SALT_ROUNDS')
        const hashedPassword = await bcrypt.hash(
            registrationData.password,
            saltRounds,
        )
        try {
            const createdUser = await this.userService.create({
                ...registrationData,
                password: hashedPassword,
            })
            createdUser.password = undefined
            return createdUser
        } catch (error) {
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
}
