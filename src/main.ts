import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const options: SwaggerDocumentOptions = {
    operationIdFactory: (
      controllerKey: string,
      methodKey: string
    ) => methodKey
  };
  const config = new DocumentBuilder()
    .setTitle('ManagementAPI')
    .setDescription('Api do App de gestão, desenvolvido by Infinity Tec')
    .setVersion('1.0')
    .build();
  
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  await app.listen(3000);
}

bootstrap();