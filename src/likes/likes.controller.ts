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
import {LikesService} from './likes.service'
import {Likes} from './likes.entity'
import {HttpResponseCode} from '../common/http/responsecodes.enum'
import {Response} from 'express'
import {CreateLikesDto, UnlikedDto} from './likes.dto'
import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard'
import {Pagination} from 'nestjs-typeorm-paginate'

@ApiCookieAuth('vcp-jwt-cookie')
@ApiTags('Likes')
@Controller('likes')
export class LikesController {
    constructor(private readonly videoLikesService: LikesService) {}

    @UseGuards(JwtAuthenticationGuard)
    @Post()
    @ApiOperation({summary: 'Like video by an user'})
    @ApiResponse({
        status: 200,
        description: 'Like details',
        type: UnlikedDto,
    })
    @ApiBody({type: CreateLikesDto})
    async like(@Body() likesData: CreateLikesDto) {
        return this.videoLikesService.like(likesData)
    }

    @UseGuards(JwtAuthenticationGuard)
    @Patch()
    @ApiOperation({summary: 'Unlike video by an user'})
    @ApiResponse({
        status: 200,
        description: 'Unlike details',
        type: UnlikedDto,
    })
    @ApiBody({type: CreateLikesDto})
    async unlike(@Body() likesData: CreateLikesDto) {
        return this.videoLikesService.unlike(likesData)
    }

    @UseGuards(JwtAuthenticationGuard)
    @Get(':userId/videos')
    @ApiOperation({summary: 'Video list liked by an user'})
    @ApiResponse({
        status: 200,
        description: 'Liked video list',
        type: [UnlikedDto],
    })
    async getAllLikedVideosByUserId(
        @Param('userId', ParseIntPipe) userId: number,
    ) {
        return this.videoLikesService.getAllLikedVideosByUserId(userId)
    }
}
