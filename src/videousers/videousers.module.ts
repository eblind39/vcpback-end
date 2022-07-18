import {Module} from '@nestjs/common'
import {UserModule} from '../user/user.module'
import {VideoModule} from '../video/video.module'
import {VideoUsersService} from './videousers.service'

@Module({
    imports: [UserModule, VideoModule],
    providers: [VideoUsersService],
})
export class VideoUsersModule {}
