import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});

  // Enable CORS  FOR YOUR FRONTEND
  app.enableCors({
    origin: 'http://localhost:5173', // React FrontEnd Url
    credentials: true, 
  });
  await app.listen(3000);
}
bootstrap();
