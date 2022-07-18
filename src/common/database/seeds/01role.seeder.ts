import {Seeder, SeederFactoryManager} from 'typeorm-extension'
import {DataSource} from 'typeorm'
import {Role} from '../../../role/role.entity'

export default class RoleSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager,
    ): Promise<any> {
        console.log('> 01 Seeding Roles')

        const repository = dataSource.getRepository<Role>(Role)

        await repository.insert([
            {
                name: 'Teacher',
            },
            {
                name: 'Student',
            },
        ])
    }
}
