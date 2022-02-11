require('dotenv').config();

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { GradesApiAdminModule } from './grades-api-admin.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(GradesApiAdminModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const config = new DocumentBuilder()
    .setTitle('Grades api admin')
    .setDescription('Api for registration and listing students and grades')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3001);
}
bootstrap();
