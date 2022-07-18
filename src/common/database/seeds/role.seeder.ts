import {Seeder, SeederFactoryManager} from 'typeorm-extension'
import {DataSource} from 'typeorm'
import {Role} from '../../../role/role.entity'

export default class RoleSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager,
    ): Promise<any> {
        console.log('> Seeding Roles')

        const repository = dataSource.getRepository<Role>(Role)

        await repository.insert([
            {
                name: 'Teacher',
            },
            {
                name: 'Student',
            },
        ])

        // ---------------------------------------------------

        // const roleFactory = await factoryManager.get(Role)
        // // save 1 factory generated entity, to the database
        // await roleFactory.save()

        // // save 5 factory generated entities, to the database
        // await roleFactory.saveMany(5)
    }
}
