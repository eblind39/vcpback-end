import {Module} from '@nestjs/common'
import {FollowerService} from './follower.service'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Follower} from './follower.entity'
import {UserModule} from 'src/user/user.module'
import {VideoModule} from 'src/video/video.module'
import {FollowerController} from './follower.controller'

@Module({
    imports: [UserModule, VideoModule, TypeOrmModule.forFeature([Follower])],
    providers: [FollowerService],
    exports: [FollowerService],
    controllers: [FollowerController],
})
export class FollowerModule {}
