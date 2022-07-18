module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'vcpdb',
    synchronize: false,
    seeds: ['src/common/database/seeds/**/*{.ts,.js}'],
    factories: ['src/common/database/factories/**/*{.ts,.js}'],
    entities: ['src/**/*.entity.{ts,js}'],
}
