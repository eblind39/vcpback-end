import {Module} from '@nestjs/common'
import {ConfigModule} from '@nestjs/config'
import {TypeOrmModule} from '@nestjs/typeorm'
import {AuthenticationModule} from './authentication/authentication.module'
import {getEnvPath} from './common/helpers/env.helper'
import {TypeOrmConfigService} from './common/typeorm/typeorm.service'
import {UserModule} from './user/user.module'
import {VideoModule} from './video/video.module'
import {LikesModule} from './likes/likes.module'
import {FollowerModule} from './follower/follower.module'

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
        LikesModule,
        FollowerModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
