import {Module} from '@nestjs/common'
import {LikesService} from './likes.service'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Likes} from './likes.entity'
import {UserModule} from 'src/user/user.module'
import {VideoModule} from 'src/video/video.module'
import {LikesController} from './likes.controller'

@Module({
    imports: [UserModule, VideoModule, TypeOrmModule.forFeature([Likes])],
    providers: [LikesService],
    exports: [LikesService],
    controllers: [LikesController],
})
export class LikesModule {}
