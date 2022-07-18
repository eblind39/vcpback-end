import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Role} from './role.entity'
import {CreateRoleDto} from './role.dto'
import {Repository} from 'typeorm'

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(Role) private roleRepository: Repository<Role>,
    ) {}

    async create(roleData: CreateRoleDto) {
        const newrole: Role = await this.roleRepository.create(roleData)
        await this.roleRepository.save(newrole)
        return newrole
    }

    async getById(id: number) {
        const role = await this.roleRepository.findOneBy({id})
        if (role) return role
        throw new HttpException(
            'Role with this id does not exist',
            HttpStatus.NOT_FOUND,
        )
    }

    async getByName(name: string) {
        const role = await this.roleRepository.findOneBy({name})
        if (role) return role
        throw new HttpException(
            'Role with this email does not exist',
            HttpStatus.NOT_FOUND,
        )
    }
}
