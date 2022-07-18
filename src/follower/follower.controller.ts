import {
    Body,
    Req,
    Controller,
    HttpCode,
    Post,
    UseGuards,
    Res,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Put,
    Query,
    DefaultValuePipe,
} from '@nestjs/common'
import {FollowerService} from './follower.service'
import {Follower} from './follower.entity'
import {HttpResponseCode} from '../common/http/responsecodes.enum'
import {Response} from 'express'
import {CreateFollowerDto} from './follower.dto'
import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard'
import {Pagination} from 'nestjs-typeorm-paginate'

@Controller('follower')
export class FollowerController {
    constructor(private readonly videoLikesService: FollowerService) {}

    @UseGuards(JwtAuthenticationGuard)
    @Post()
    async follow(@Body() likesData: CreateFollowerDto) {
        return this.videoLikesService.follow(likesData)
    }

    @UseGuards(JwtAuthenticationGuard)
    @Patch()
    async unfollow(@Body() likesData: CreateFollowerDto) {
        return this.videoLikesService.unfollow(likesData)
    }

    @UseGuards(JwtAuthenticationGuard)
    @Get(':userId/following')
    async getAllLikedVideosByUserId(
        @Param('userFollowerId', ParseIntPipe) userFollowerId: number,
    ) {
        return this.videoLikesService.getAllFollowedByUserId(userFollowerId)
    }
}
