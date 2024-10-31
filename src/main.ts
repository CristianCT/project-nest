import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/* Se establece la configuración del servidor */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
