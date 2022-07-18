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
import {LikesService} from './likes.service'
import {Likes} from './likes.entity'
import {HttpResponseCode} from '../common/http/responsecodes.enum'
import {Response} from 'express'
import {CreateLikesDto} from './likes.dto'
import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard'
import {Pagination} from 'nestjs-typeorm-paginate'

@Controller('likes')
export class LikesController {
    constructor(private readonly videoLikesService: LikesService) {}

    @UseGuards(JwtAuthenticationGuard)
    @Post()
    async like(@Body() likesData: CreateLikesDto) {
        return this.videoLikesService.like(likesData)
    }

    @UseGuards(JwtAuthenticationGuard)
    @Patch()
    async unlike(@Body() likesData: CreateLikesDto) {
        return this.videoLikesService.unlike(likesData)
    }

    @UseGuards(JwtAuthenticationGuard)
    @Get(':userId/videos')
    async getAllLikedVideosByUserId(
        @Param('userId', ParseIntPipe) userId: number,
    ) {
        return this.videoLikesService.getAllLikedVideosByUserId(userId)
    }
}
