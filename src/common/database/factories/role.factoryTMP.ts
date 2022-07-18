import {setSeederFactory} from 'typeorm-extension'
import {Role} from '../../../role/role.entity'

export default setSeederFactory(Role, faker => {
    const role = new Role()
    role.name = faker.name.firstName('male')
    return role
})
