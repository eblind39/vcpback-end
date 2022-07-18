import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {UserService} from '../user/user.service'
import {VideoService} from '../video/video.service'

@Injectable()
export class VideoUsersService {
    constructor(
        private readonly videoService: VideoService,
        private readonly userService: UserService,
    ) {}

    async getVideosByUserId(userId: number) {
        return await this.videoService.getVideosByUserId(userId)
    }

    async getUserById(id: number) {
        return await this.userService.getById(id)
    }
}
