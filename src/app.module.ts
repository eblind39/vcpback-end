import {Module} from '@nestjs/common'
import {ConfigModule} from '@nestjs/config'
import {TypeOrmModule} from '@nestjs/typeorm'
import {AuthenticationModule} from './authentication/authentication.module'
import {getEnvPath} from './common/helper/env.helper'
import {TypeOrmConfigService} from './shared/typeorm/typeorm.service'
import {UserModule} from './user/user.module'
import {VideoModule} from './video/video.module'

const envFilePath: string[] = getEnvPath(`${__dirname}/common/envs`)
@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath,
            isGlobal: true,
        }),
        TypeOrmModule.forRootAsync({useClass: TypeOrmConfigService}),
        AuthenticationModule,
        UserModule,
        VideoModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
