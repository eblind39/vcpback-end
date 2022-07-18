import {
    forwardRef,
    HttpException,
    HttpStatus,
    Inject,
    Injectable,
} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {User} from './user.entity'
import {CreateUserDto} from './user.dto'
import {Repository} from 'typeorm'
import {RoleService} from '../role/role.service'
import {Role} from '../role/role.entity'
// import {VideoService} from '../video/video.service'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        // @Inject(forwardRef(() => VideoService))
        // private readonly videoService: VideoService,
        private readonly roleService: RoleService,
    ) {}

    async create(userData: CreateUserDto) {
        const role: Role = await this.roleService.getById(userData.roleId)
        const newUser: User = await this.userRepository.create({
            ...userData,
            role: role,
        })
        await this.userRepository.save(newUser)
        return newUser
    }

    async getByEmail(email: string) {
        const user = await this.userRepository.findOneBy({email})
        if (user) return user
        throw new HttpException(
            'User with this email does not exist',
            HttpStatus.NOT_FOUND,
        )
    }

    async getById(id: number) {
        const user: User = await this.userRepository.findOneBy({id})
        if (user) return user
        throw new HttpException(
            'User with this id does not exist',
            HttpStatus.NOT_FOUND,
        )
    }

    // async getVideosByUserId(userId: number) {
    //     const videos = await this.videoService.getVideosByUserId(userId)

    //     if (videos) return videos
    //     throw new HttpException(
    //         'Likes with this user id do not exist',
    //         HttpStatus.NOT_FOUND,
    //     )
    // }
}
