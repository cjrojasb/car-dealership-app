import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // whitelist is for delete any extra fields of requests and keep only data available in DTO'S
      whitelist: true,
      // forbidNonWhitelisted indicate property extras don't exist and launch error
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(8000);
}
bootstrap();
