import {
    Body,
    Req,
    Controller,
    HttpCode,
    Post,
    UseGuards,
    Res,
    Get,
} from '@nestjs/common'
import {AuthenticationService} from './authentication.service'
import RequestWithUser from './requestWithUser.interface'
import {LocalAuthenticationGuard} from './localAuthentication.guard'
import {User} from '../user/user.entity'
import {HttpResponseCode} from '../common/http/responsecodes.enum'
import {Response} from 'express'
import JwtAuthenticationGuard from './jwt-authentication.guard'
import {CreateUserDto} from '../user/user.dto'

@Controller('authentication')
export class AuthenticationController {
    constructor(
        private readonly authenticationService: AuthenticationService,
    ) {}

    @UseGuards(JwtAuthenticationGuard)
    @Get('whoami')
    authenticate(@Req() request: RequestWithUser) {
        const user: User = request.user
        user.password = undefined
        return user
    }

    @Post('register')
    async register(@Body() registrationData: CreateUserDto) {
        return this.authenticationService.register(registrationData)
    }

    @HttpCode(HttpResponseCode.OK)
    @UseGuards(LocalAuthenticationGuard)
    @Post('login')
    async logIn(@Req() request: RequestWithUser, @Res() response: Response) {
        const user: User = request.user
        const cookie = await this.authenticationService.getCookieWithJwtToken(
            user.id,
            user.role.id,
        )
        response.setHeader('Set-Cookie', cookie)
        user.password = undefined
        return response.send(user)
    }

    @UseGuards(JwtAuthenticationGuard)
    @Post('logout')
    async logOut(@Req() resquest: RequestWithUser, @Res() response: Response) {
        response.setHeader(
            'Set-Cookie',
            this.authenticationService.getCookieForLogOut(),
        )
        return response.sendStatus(HttpResponseCode.OK)
    }
}
