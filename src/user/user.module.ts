import {Module} from '@nestjs/common'
import {UserService} from './user.service'
import {TypeOrmModule} from '@nestjs/typeorm'
import {User} from './user.entity'
import {RoleModule} from '../role/role.module'
// import {VideoModule} from '../video/video.module'
import {UserController} from './user.controller'

@Module({
    imports: [RoleModule, TypeOrmModule.forFeature([User])],
    providers: [UserService],
    exports: [UserService],
    controllers: [UserController],
})
export class UserModule {}
