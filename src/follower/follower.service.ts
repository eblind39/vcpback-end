import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Follower} from './follower.entity'
import {CreateFollowerDto} from './follower.dto'
import {Repository} from 'typeorm'
import {UserService} from '../user/user.service'
import {User} from '../user/user.entity'

@Injectable()
export class FollowerService {
    constructor(
        @InjectRepository(Follower)
        private likesRepository: Repository<Follower>,
        private readonly userService: UserService,
    ) {}

    async follow(followerData: CreateFollowerDto) {
        const userFollower: User = await this.userService.getById(
            followerData.userFollowerId,
        )
        const userFollowed: User = await this.userService.getById(
            followerData.userFollowedId,
        )

        const newVL: Follower = await this.likesRepository.create({
            ...followerData,
            userFollower,
            userFollowed,
        })
        await this.likesRepository.save(newVL)
        return newVL
    }

    async unfollow(likeData: CreateFollowerDto) {
        const like: Follower = await this.getFollowDetails(
            likeData.userFollowerId,
            likeData.userFollowedId,
        )
        like.unfollowDate = new Date()
        await this.likesRepository.save(like)
        return like
    }

    private async getFollowDetails(
        userIdFollower: number,
        userIdFollowed: number,
    ) {
        const follow: Follower = await this.likesRepository
            .createQueryBuilder('follow')
            .innerJoinAndSelect('follow.userFollower', 'follower')
            .innerJoinAndSelect('follow.userFollowed', 'followed')
            .select(['follow'])
            .where('follower.id = :userId', {userIdFollower})
            .andWhere('followed.id = :userIdFollowed', {userIdFollowed})
            .getOne()

        if (follow) return follow
        throw new HttpException(
            'Video with this id does not exist',
            HttpStatus.NOT_FOUND,
        )
    }

    async getAllFollowedByUserId(userFollowerId: number) {
        const followed = await this.likesRepository
            .createQueryBuilder('follow')
            .innerJoinAndSelect('follow.userFollower', 'follower')
            .innerJoinAndSelect('follow.userFollowed', 'followed')
            .select(['follow', 'followed'])
            .where('follower.id = :userFollowerId', {userFollowerId})
            .getMany()

        if (followed) return followed
        throw new HttpException(
            'Likes with this user id do not exist',
            HttpStatus.NOT_FOUND,
        )
    }
}
