import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true}); //adicionado o cors:true, para que o frontend consiga chamar o backend
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
