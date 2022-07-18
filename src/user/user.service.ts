import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {User} from './user.entity'
import {CreateUserDto} from './user.dto'
import {Repository} from 'typeorm'
import {RoleService} from '../role/role.service'
import {Role} from '../role/role.entity'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        private readonly roleService: RoleService,
    ) {}

    async create(userData: CreateUserDto) {
        const role: Role = await this.roleService.getById(userData.roleId)
        const newUser: User = await this.userRepository.create({
            ...userData,
            role,
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
        const user = await this.userRepository.findOneBy({id})
        if (user) return user
        throw new HttpException(
            'User with this id does not exist',
            HttpStatus.NOT_FOUND,
        )
    }
}
