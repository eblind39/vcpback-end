import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {ConfigService} from '@nestjs/config'
import {UserService} from '../user/user.service'
import {RoleService} from '../role/role.service'
import {PostgresErrorCode} from '../common/types/postgresErrorCodes.enum'
import {JwtService} from '@nestjs/jwt'
import {TokenPayload} from './tokenPayload.interface'
import * as bcrypt from 'bcrypt'
import {CreateUserDto} from '../user/user.dto'
import {Role} from '../role/role.entity'
import {User} from '../user/user.entity'

@Injectable()
export class AuthenticationService {
    constructor(
        private readonly userService: UserService,
        private readonly roleService: RoleService,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
    ) {}

    public async getCookieWithJwtToken(userId: number, roleId: number) {
        const role: Role = await this.roleService.getById(roleId)
        const payload: TokenPayload = {userId, roleName: role.name} // , name

        const token = this.jwtService.sign(payload)
        return `Authentication=${token}; Max-Age=${this.configService.get<number>(
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
            const user: User = await this.userService.getByEmail(
                registrationData.email,
            )
            user.password = undefined

            return user
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
        return `Authentication=; Max-Age=0`
    }
}
