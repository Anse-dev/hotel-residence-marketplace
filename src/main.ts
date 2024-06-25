import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseInterceptor } from './presentation/interceptors/response.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HotelModule } from './modules/hotel/hotel.module';
import { UserModule } from './modules/user/user.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalPipes(new ValidationPipe());
  // Swagger Configuration for Hotels
  const hotelOptions = new DocumentBuilder()
    .setTitle('Hotel API')
    .setDescription('API for Hotel management')
    .setVersion('1.0')
    .addTag('hotels')
    .build();
  const hotelDocument = SwaggerModule.createDocument(app, hotelOptions, {
    include: [HotelModule],
  });
  SwaggerModule.setup('api/hotel', app, hotelDocument);

  // Swagger Configuration for Users
  const userOptions = new DocumentBuilder()
    .setTitle('User API')
    .setDescription('API for User management')
    .setVersion('1.0')
    .addTag('users')
    .build();
  const userDocument = SwaggerModule.createDocument(app, userOptions, {
    include: [UserModule],
  });
  SwaggerModule.setup('api/user', app, userDocument);


  await app.listen(3000);
}
bootstrap();
