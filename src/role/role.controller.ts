import {Controller, Get} from '@nestjs/common'
import {RoleService} from './role.service'
import {
    ApiBody,
    ApiCookieAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger'
import {Role} from './role.entity'

@ApiCookieAuth()
@ApiTags('Roles')
@Controller('roles')
export class RoleController {
    constructor(private readonly userService: RoleService) {}

    @Get()
    @ApiResponse({
        status: 200,
        description: 'User registered',
        type: [Role],
    })
    async getRoles() {
        return this.userService.getRoles()
    }
}
