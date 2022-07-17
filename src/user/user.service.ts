import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {User} from './user.entity'
import {CreateUserDto} from './user.dto'
import {Repository} from 'typeorm'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ) {}

    async create(userData: CreateUserDto) {
        const newUser: User = await this.userRepository.create(userData)
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
        const user = await this.userRepository.findOneBy({id})
        if (user) return user
        throw new HttpException(
            'User with this id does not exist',
            HttpStatus.NOT_FOUND,
        )
    }
}
