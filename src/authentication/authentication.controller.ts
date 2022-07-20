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
import {
    ApiBody,
    ApiCookieAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger'
import {AuthenticationService} from './authentication.service'
import RequestWithUser from './requestWithUser.interface'
import {LocalAuthenticationGuard} from './localAuthentication.guard'
import {User} from '../user/user.entity'
import {HttpResponseCode} from '../common/http/responsecodes.enum'
import {Response} from 'express'
import JwtAuthenticationGuard from './jwt-authentication.guard'
import {CreateUserDto} from '../user/user.dto'
import {UserService} from '../user/user.service'
import {LoginUserDto} from '../user/signinuser.dto'

@ApiCookieAuth('vcp-jwt-cookie')
@ApiTags('Authentication')
@Controller('authentication')
export class AuthenticationController {
    constructor(
        private readonly authenticationService: AuthenticationService,
        private readonly userService: UserService,
    ) {}

    @UseGuards(JwtAuthenticationGuard)
    @Get('whoami')
    @ApiOperation({summary: 'Logged user data'})
    @ApiResponse({
        status: 200,
        description: 'Logged user data',
        type: User,
    })
    whoami(@Req() request: RequestWithUser) {
        const user: User = request.user
        user.password = undefined
        return user
    }

    @ApiOperation({summary: 'Create user'})
    @ApiResponse({
        status: 200,
        description: 'User registered',
        type: User,
    })
    @Post('signup')
    async signUp(@Body() registrationData: CreateUserDto) {
        return this.authenticationService.register(registrationData)
    }

    @UseGuards(LocalAuthenticationGuard)
    @HttpCode(HttpResponseCode.OK)
    @ApiOperation({summary: 'Sign in'})
    @ApiResponse({
        status: 200,
        description: 'User signed in',
        type: User,
    })
    @ApiBody({type: LoginUserDto})
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
    @ApiOperation({summary: 'Log out'})
    @ApiResponse({
        status: 200,
        description: 'Log out',
    })
    async signOut(@Req() resquest: RequestWithUser, @Res() response: Response) {
        response.setHeader('Access-Control-Expose-Headers', 'vcp-jwt')
        response.setHeader(
            'vcp-jwt',
            this.authenticationService.getCookieForLogOut(),
        )
        return response.sendStatus(HttpResponseCode.OK)
    }
}
