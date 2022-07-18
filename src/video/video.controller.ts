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
import {VideoService} from './video.service'
import {Video} from './video.entity'
import {HttpResponseCode} from '../common/http/responsecodes.enum'
import {Response} from 'express'
import {CreateVideoDto} from './video.dto'
import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard'
import {Pagination} from 'nestjs-typeorm-paginate'

@Controller('videos')
export class VideoController {
    constructor(private readonly videoService: VideoService) {}

    @UseGuards(JwtAuthenticationGuard)
    @Post()
    async create(@Body() videoData: CreateVideoDto) {
        return this.videoService.create(videoData)
    }

    @UseGuards(JwtAuthenticationGuard)
    @Put(':id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() videoData: CreateVideoDto,
    ) {
        console.log(id, videoData)
        return this.videoService.update(id, videoData)
    }

    @UseGuards(JwtAuthenticationGuard)
    @Patch(':id')
    async togglePublish(@Param('id', ParseIntPipe) id: number) {
        return this.videoService.togglePublish(id)
    }

    @UseGuards(JwtAuthenticationGuard)
    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        return this.videoService.getById(id)
    }

    @UseGuards(JwtAuthenticationGuard)
    @Get()
    async paginate(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe)
        limit: number = 10,
    ): Promise<Pagination<Video>> {
        limit = limit > 100 ? 100 : limit
        return this.videoService.paginate({
            page,
            limit,
            route: '/videos/paginate',
        })
    }

    @UseGuards(JwtAuthenticationGuard)
    @Get(':userId/list')
    async getVideosByUserId(@Param('userId', ParseIntPipe) userId: number) {
        return this.videoService.getVideosByUserId(userId)
    }
}
