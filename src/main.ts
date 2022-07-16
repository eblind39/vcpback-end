import {NestFactory} from '@nestjs/core'
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger'
import {AppModule} from './app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
        .setTitle('Video Creator Platform - API')
        .setDescription(
            'The Video Creator Platform API description (endpoints)',
        )
        .setVersion('1.0')
        .addTag('vcp')
        .build()

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api', app, document)

    await app.listen(3007)
}
bootstrap()
