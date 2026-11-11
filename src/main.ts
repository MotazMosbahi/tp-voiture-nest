import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('VOITURES API')
    .setDescription('API de gestion des voitures')
    .setVersion('1.0')
    .addTag('voitures')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  const configService = app.get(ConfigService);
  const port = Number(configService.get<string>('PORT') ?? '3000');
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();