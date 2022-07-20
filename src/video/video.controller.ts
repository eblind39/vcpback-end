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
import {VideoService} from './video.service'
import {Video} from './video.entity'
import {HttpResponseCode} from '../common/http/responsecodes.enum'
import {Response} from 'express'
import {CreatedVideoDto, CreateVideoDto} from './video.dto'
import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard'
import {Pagination} from 'nestjs-typeorm-paginate'

@ApiCookieAuth('vcp-jwt-cookie')
@ApiTags('Videos')
@Controller('videos')
export class VideoController {
    constructor(private readonly videoService: VideoService) {}

    @UseGuards(JwtAuthenticationGuard)
    @Post()
    @ApiOperation({summary: 'Create video'})
    @ApiResponse({
        status: 200,
        description: 'Video created',
        type: CreatedVideoDto,
    })
    async create(@Body() videoData: CreateVideoDto) {
        return this.videoService.create(videoData)
    }

    @UseGuards(JwtAuthenticationGuard)
    @Put(':id')
    @ApiOperation({summary: 'Update video'})
    @ApiResponse({
        status: 200,
        description: 'Video updated',
        type: CreatedVideoDto,
    })
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() videoData: CreateVideoDto,
    ) {
        return this.videoService.update(id, videoData)
    }

    @UseGuards(JwtAuthenticationGuard)
    @Patch(':id')
    @ApiOperation({summary: 'Toggle publish video property'})
    @ApiResponse({
        status: 200,
        description: 'Video updated',
        type: CreatedVideoDto,
    })
    async togglePublish(@Param('id', ParseIntPipe) id: number) {
        return this.videoService.togglePublish(id)
    }

    @UseGuards(JwtAuthenticationGuard)
    @Get(':id')
    @ApiOperation({summary: 'Get video by id'})
    @ApiResponse({
        status: 200,
        description: 'Video updated',
        type: CreatedVideoDto,
    })
    async getOne(@Param('id', ParseIntPipe) id: number) {
        return this.videoService.getById(id)
    }

    @UseGuards(JwtAuthenticationGuard)
    @Get()
    @ApiOperation({summary: 'Paginated video data'})
    @ApiResponse({
        status: 200,
        description: 'Video list',
        type: [CreatedVideoDto],
    })
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
    @ApiOperation({summary: 'Videos by user id'})
    @ApiResponse({
        status: 200,
        description: 'Video list',
        type: [CreatedVideoDto],
    })
    async getVideosByUserId(@Param('userId', ParseIntPipe) userId: number) {
        return this.videoService.getVideosByUserId(userId)
    }
}
