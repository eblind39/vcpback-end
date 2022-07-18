import {Module} from '@nestjs/common'
import {UserModule} from '../user/user.module'
import {VideoService} from './video.service'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Video} from './video.entity'
import {AuthenticationModule} from '../authentication/authentication.module'
import {VideoController} from './video.controller'

@Module({
    imports: [
        AuthenticationModule,
        UserModule,
        TypeOrmModule.forFeature([Video]),
    ],
    providers: [VideoService],
    exports: [VideoService],
    controllers: [VideoController],
})
export class VideoModule {}
