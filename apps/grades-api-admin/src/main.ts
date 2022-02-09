import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { GradesApiAdminModule } from './grades-api-admin.module';

async function bootstrap() {
  const app = await NestFactory.create(GradesApiAdminModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(3001);
}
bootstrap();
