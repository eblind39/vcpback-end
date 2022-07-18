import {Module} from '@nestjs/common'
import {UserService} from './user.service'
import {TypeOrmModule} from '@nestjs/typeorm'
import {User} from './user.entity'
import {RoleModule} from 'src/role/role.module'

@Module({
    imports: [RoleModule, TypeOrmModule.forFeature([User])],
    providers: [UserService],
    exports: [UserService],
})
export class UserModule {}
