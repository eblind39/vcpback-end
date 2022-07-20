import {Controller, Get} from '@nestjs/common'
import {RoleService} from './role.service'

@Controller('roles')
export class RoleController {
    constructor(private readonly userService: RoleService) {}

    @Get()
    async getRoles() {
        return this.userService.getRoles()
    }
}
