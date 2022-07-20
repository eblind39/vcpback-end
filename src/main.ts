import {ValidationPipe} from '@nestjs/common'
import {ConfigService} from '@nestjs/config'
import {NestFactory} from '@nestjs/core'
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger'
import {AppModule} from './app.module'
import * as cookieParser from 'cookie-parser'
const bodyParser = require('body-parser')

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    app.use(cookieParser())
    app.use(
        bodyParser.urlencoded({
            extended: true,
        }),
    )
    app.enableCors({
        methods: ['POST', 'PUT', 'DELETE', 'GET'],
        origin: ['http://localhost:3000', 'http://localhost:3007'],
        credentials: true,
    })

    const configSW = new DocumentBuilder()
        .setTitle('Video Creator Platform - API')
        .setDescription(
            'The Video Creator Platform API description (endpoints)',
        )
        .setVersion('1.0')
        .addTag('vcp')
        .build()
    const documentSW = SwaggerModule.createDocument(app, configSW)
    SwaggerModule.setup('api', app, documentSW)

    const config: ConfigService = app.get(ConfigService)
    const port: number = config.get<number>('PORT')

    app.useGlobalPipes(new ValidationPipe({whitelist: true, transform: true}))
    await app.listen(port, () => {
        console.log('[API - Base Url]', config.get<string>('BASE_URL'))
    })
}
bootstrap()
