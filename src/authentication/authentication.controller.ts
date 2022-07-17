import {
    Body,
    Req,
    Controller,
    HttpCode,
    Post,
    UseGuards,
    Res,
} from '@nestjs/common'
import {AuthenticationService} from './authentication.service'
import RegisterDto from './resgister.dto'
import RequestWithUser from './requestWithUser.interface'
import {LocalAuthenticationGuard} from './localAuthentication.guard'
import {User} from '../user/user.entity'
import {HttpResponseCode} from '../common/http/responsecodes.enum'
import {Response} from 'express'

@Controller('authentication')
export class AuthenticationController {
    constructor(
        private readonly authenticationService: AuthenticationService,
    ) {}

    @HttpCode(HttpResponseCode.OK)
    @UseGuards(LocalAuthenticationGuard)
    @Post('log-in')
    async logIn(@Req() request: RequestWithUser, @Res() response: Response) {
        const user: User = request.user
        const cookie = this.authenticationService.getCookieWithJwtToken(user.id)
        response.setHeader('Set-Cookie', cookie)
        user.password = undefined
        return response.send(user)
    }
}
