import {Seeder, SeederFactoryManager} from 'typeorm-extension'
import {DataSource} from 'typeorm'
import {User} from '../../../user/user.entity'
import {Role} from '../../../role/role.entity'
import * as bcrypt from 'bcrypt'

export default class UserSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager,
    ): Promise<any> {
        console.log('> 02 Seeding Users')

        const salt = bcrypt.genSaltSync(Number(10))
        const hashedPassword = bcrypt.hashSync('12345', salt)

        const userRepository = dataSource.getRepository<User>(User)
        const rolesRepository = dataSource.getRepository<Role>(Role)

        // const roles = await rolesRepository.createQueryBuilder('roles')
        //                 .select(['roles'])
        //                 .getMany()

        const teacherRole = await rolesRepository.findOneBy({name: 'Teacher'})
        const studentRole = await rolesRepository.findOneBy({name: 'Student'})

        await userRepository.insert([
            {
                name: 'Leanne Graham',
                email: 'leanne@april.biz',
                password: hashedPassword,
                photourl: 'https://reqres.in/img/faces/2-image.jpg',
                role: teacherRole,
            },
            {
                name: 'Ervin Howell',
                email: 'ervin@melissa.tv',
                password: hashedPassword,
                photourl: 'https://reqres.in/img/faces/1-image.jpg',
                role: teacherRole,
            },
            {
                name: 'Clementine Bauch',
                email: 'clementine@yesenia.net',
                password: hashedPassword,
                photourl: 'https://reqres.in/img/faces/12-image.jpg',
                role: studentRole,
            },
            {
                name: 'Byron Lebsack',
                email: 'byron.lebsack@kory.org',
                password: hashedPassword,
                photourl: 'https://reqres.in/img/faces/10-image.jpg',
                role: studentRole,
            },
            {
                name: 'Helsey Dietrich',
                email: 'helsey_dietrich@annie.ca',
                password: hashedPassword,
                photourl: 'https://reqres.in/img/faces/8-image.jpg',
                role: studentRole,
            },
        ])

        // ---------------------------------------------------
    }
}
