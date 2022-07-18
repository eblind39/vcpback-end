import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Video} from './video.entity'
import {CreateVideoDto} from './video.dto'
import {Repository} from 'typeorm'
import {paginate, Pagination, IPaginationOptions} from 'nestjs-typeorm-paginate'

@Injectable()
export class VideoService {
    constructor(
        @InjectRepository(Video)
        private readonly videoRepository: Repository<Video>,
        @InjectRepository(Video) private readonly repository: Repository<Video>,
    ) {}

    async create(videoData: CreateVideoDto) {
        const newVideo: Video = await this.videoRepository.create(videoData)
        await this.videoRepository.save(newVideo)
        return newVideo
    }

    async update(id: number, videoData: CreateVideoDto) {
        let video: Video = await this.getById(id)
        video = {...videoData, id, published: video.published}
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
        const queryBuilder = this.repository.createQueryBuilder('c')
        queryBuilder.orderBy('c.title', 'DESC') // Or whatever you need to do

        return paginate<Video>(queryBuilder, options)
    }
}
