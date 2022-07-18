import {
    Body,
    Req,
    Controller,
    HttpCode,
    Post,
    UseGuards,
    Res,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Put,
    Query,
    DefaultValuePipe,
} from '@nestjs/common'
import {UserService} from './user.service'
import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard'

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    // @UseGuards(JwtAuthenticationGuard)
    // @Get(':userId/videos')
    // async getVideosByUserId(@Param('userId', ParseIntPipe) userId: number) {
    //     return this.userService.getVideosByUserId(userId)
    // }
}
