import {setSeederFactory} from 'typeorm-extension'
import {Role} from '../../../role/role.entity'
import {User} from '../../../user/user.entity'
import * as bcrypt from 'bcrypt'

export default setSeederFactory(User, faker => {
    const salt = bcrypt.genSaltSync(Number(10))
    const hashedPassword = bcrypt.hashSync('12345', salt)

    const user = new User()
    user.name = faker.name.firstName('male')
    user.email = faker.internet.email(user.name, '01')
    user.password = hashedPassword
    user.photourl = faker.internet.url()
    return user
})
