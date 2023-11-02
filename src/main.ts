import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Nestjs with Postgres')
    .setVersion('1.0')
    .addTag('nest-postgres')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('monitoreo/v1/api-docs', app, document);
  
  await app.listen(3000);

  console.log(`Servidor corriendo en puerto: ${process.env.PORT}`);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
