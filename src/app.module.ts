
import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';

import { ConfigModule } from '@nestjs/config';
import { HotelModule } from './modules/hotel/hotel.module';
import { ResidenceModule } from './modules/residence/residence.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: 'database.sqlite',
      autoLoadModels: true,
      synchronize: true,
    }),
    HotelModule, ResidenceModule
  ],
})
export class AppModule { }
