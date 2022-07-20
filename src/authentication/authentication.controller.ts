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
import {UserService} from '../user/user.service'

@Controller('authentication')
export class AuthenticationController {
    constructor(
        private readonly authenticationService: AuthenticationService,
        private readonly userService: UserService,
    ) {}

    @UseGuards(JwtAuthenticationGuard)
    @Get('whoami')
    whoami(@Req() request: RequestWithUser) {
        const user: User = request.user
        user.password = undefined
        return user
    }

    @Post('signup')
    async signUp(@Body() registrationData: CreateUserDto) {
        return this.authenticationService.register(registrationData)
    }

    @UseGuards(LocalAuthenticationGuard)
    @HttpCode(HttpResponseCode.OK)
    @Post('signin')
    async signIn(@Req() request: RequestWithUser, @Res() response: Response) {
        const user: User = request.user
        const cookie = await this.authenticationService.getCookieWithJwtToken(
            user.id,
            user.role.id,
        )
        response.setHeader('Access-Control-Expose-Headers', 'vcp-jwt')
        response.setHeader('vcp-jwt', cookie)
        user.password = undefined
        console.log(response.getHeaders())
        return response.send(user)
    }

    @UseGuards(JwtAuthenticationGuard)
    @Post('signout')
    async signOut(@Req() resquest: RequestWithUser, @Res() response: Response) {
        response.setHeader('Access-Control-Expose-Headers', 'vcp-jwt')
        response.setHeader(
            'vcp-jwt',
            this.authenticationService.getCookieForLogOut(),
        )
        return response.sendStatus(HttpResponseCode.OK)
    }
}
