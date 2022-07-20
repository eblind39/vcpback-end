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
import {
    ApiBody,
    ApiCookieAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger'
import {FollowerService} from './follower.service'
import {Follower} from './follower.entity'
import {HttpResponseCode} from '../common/http/responsecodes.enum'
import {Response} from 'express'
import {CreateFollowerDto, FollowedDto} from './follower.dto'
import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard'
import {Pagination} from 'nestjs-typeorm-paginate'

@ApiCookieAuth('vcp-jwt-cookie')
@ApiTags('Follower')
@Controller('follower')
export class FollowerController {
    constructor(private readonly videoLikesService: FollowerService) {}

    @UseGuards(JwtAuthenticationGuard)
    @Post()
    @ApiOperation({summary: 'Follow an user'})
    @ApiResponse({
        status: 200,
        description: 'Follow details',
        type: FollowedDto,
    })
    @ApiBody({type: CreateFollowerDto})
    async follow(@Body() followerData: CreateFollowerDto) {
        return this.videoLikesService.follow(followerData)
    }

    @UseGuards(JwtAuthenticationGuard)
    @Patch()
    @ApiOperation({summary: 'Unfollow an user'})
    @ApiResponse({
        status: 200,
        description: 'Unfollow details',
        type: FollowedDto,
    })
    @ApiBody({type: CreateFollowerDto})
    async unfollow(@Body() followerData: CreateFollowerDto) {
        return this.videoLikesService.unfollow(followerData)
    }

    @UseGuards(JwtAuthenticationGuard)
    @Get(':userFollowerId/following')
    @ApiOperation({summary: 'Users list followed by user'})
    @ApiResponse({
        status: 200,
        description: 'Followed users list',
        type: FollowedDto,
    })
    async getAllLikedVideosByUserId(
        @Param('userFollowerId', ParseIntPipe) userFollowerId: number,
    ) {
        console.log(userFollowerId)
        return this.videoLikesService.getAllFollowedByUserId(userFollowerId)
    }
}
