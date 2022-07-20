import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Video} from './video.entity'
import {CreateVideoDto} from './video.dto'
import {Repository} from 'typeorm'
import {paginate, Pagination, IPaginationOptions} from 'nestjs-typeorm-paginate'
import {UserService} from '../user/user.service'

@Injectable()
export class VideoService {
    constructor(
        @InjectRepository(Video)
        private readonly videoRepository: Repository<Video>,
        private readonly userService: UserService,
    ) {}

    async create(videoData: CreateVideoDto) {
        const user = await this.userService.getById(videoData.userId)
        const newVideo: Video = await this.videoRepository.create({
            ...videoData,
            user,
        })

        await this.videoRepository.save(newVideo)
        return newVideo
    }

    async update(id: number, videoData: CreateVideoDto) {
        let video: Video = await this.getById(id)
        const user = await this.userService.getById(videoData.userId)
        video = {...videoData, id, published: video.published, user}
        await this.videoRepository.save(video)
        return video
    }

    async getByTitle(title: string) {
        const video: Video = await this.videoRepository.findOneBy({title})
        if (video) return video
        throw new HttpException(
            'Video with this email does not exist',
            HttpStatus.NOT_FOUND,
        )
    }

    async getById(id: number) {
        const video: Video = await this.videoRepository.findOneBy({id})
        if (video) return video
        throw new HttpException(
            'Video with this id does not exist',
            HttpStatus.NOT_FOUND,
        )
    }

    async togglePublish(id: number) {
        const video: Video = await this.getById(id)
        video.published = !video.published
        await this.videoRepository.save(video)
        return video
    }

    async paginate(options: IPaginationOptions): Promise<Pagination<Video>> {
        const queryBuilder = this.videoRepository.createQueryBuilder('c')
        queryBuilder.orderBy('c.title', 'DESC') // Or whatever you need to do

        return paginate<Video>(queryBuilder, options)
    }

    async getVideosByUserId(userId: number) {
        const videos: Video[] = await this.videoRepository
            .createQueryBuilder('videos')
            .innerJoinAndSelect('videos.user', 'user')
            .select(['videos', 'user'])
            .where('user.id = :userId', {userId})
            .getMany()

        if (videos) return videos
        else return []
    }
}
