import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Likes} from './likes.entity'
import {CreateLikesDto} from './likes.dto'
import {Repository} from 'typeorm'
import {UserService} from '../user/user.service'
import {User} from '../user/user.entity'
import {VideoService} from '../video/video.service'
import {Video} from '../video/video.entity'

@Injectable()
export class LikesService {
    constructor(
        @InjectRepository(Likes)
        private likesRepository: Repository<Likes>,
        private readonly userService: UserService,
        private readonly videoService: VideoService,
    ) {}

    async like(videoLikeData: CreateLikesDto) {
        const user: User = await this.userService.getById(videoLikeData.userId)
        const video: Video = await this.videoService.getById(
            videoLikeData.videoId,
        )
        user.password = undefined
        const newVL: Likes = await this.likesRepository.create({
            ...videoLikeData,
            user,
            video,
        })
        await this.likesRepository.save(newVL)
        return newVL
    }

    async unlike(likeData: CreateLikesDto) {
        const user: User = await this.userService.getById(likeData.userId)
        const video: Video = await this.videoService.getById(likeData.videoId)
        let like: Likes = await this.getByUserIdVideoId(
            likeData.userId,
            likeData.videoId,
        )
        like.unlikeDate = new Date()
        user.password = undefined
        like = {...like, user, video}
        await this.likesRepository.save(like)
        return like
    }

    private async getByUserIdVideoId(userId: number, videoId: number) {
        const like: Likes = await this.likesRepository
            .createQueryBuilder('likes')
            .innerJoinAndSelect('likes.user', 'user')
            .innerJoinAndSelect('likes.video', 'video')
            .select(['likes'])
            .where('user.id = :userId', {userId})
            .andWhere('video.id = :userId', {videoId})
            .getOne()

        if (like) return like
        throw new HttpException(
            'Video with this id does not exist',
            HttpStatus.NOT_FOUND,
        )
    }

    async getAllLikedVideosByUserId(userId: number) {
        const likes = await this.likesRepository
            .createQueryBuilder('likes')
            .innerJoinAndSelect('likes.user', 'user')
            .innerJoinAndSelect('likes.video', 'video')
            .select(['likes', 'video'])
            .where('user.id = :userId', {userId})
            .andWhere('likes.unlikeDate IS NULL')
            .getMany()

        if (likes) return likes
        throw new HttpException(
            'Likes with this user id do not exist',
            HttpStatus.NOT_FOUND,
        )
    }
}
