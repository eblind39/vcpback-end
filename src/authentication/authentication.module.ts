import {Module} from '@nestjs/common'
import {AuthenticationService} from './authentication.service'
import {UserModule} from '../user/user.module'
import {RoleModule} from '../role/role.module'
import {AuthenticationController} from './authentication.controller'
import {PassportModule} from '@nestjs/passport'
import {LocalStrategy} from './local.strategy'
import {JwtModule} from '@nestjs/jwt'
import {ConfigModule, ConfigService} from '@nestjs/config'
import {JwtStrategy} from './jwt.strategy'

@Module({
    imports: [
        UserModule,
        RoleModule,
        PassportModule,
        ConfigModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get<string>('JWT_SECRET'),
                signOptions: {
                    expiresIn: `${configService.get<number>(
                        'JWT_EXPIRATION_TIME',
                    )}s`,
                },
            }),
        }),
    ],
    providers: [AuthenticationService, LocalStrategy, JwtStrategy],
    controllers: [AuthenticationController],
    exports: [AuthenticationService],
})
export class AuthenticationModule {}
