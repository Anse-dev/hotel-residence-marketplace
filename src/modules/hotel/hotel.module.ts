import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CreateHotelUseCase } from '../../application/use-cases/hotel/create-hotel.use-case';
import { GetAllHotelsUseCase } from '../../application/use-cases/hotel/get-all-hotels.use-case';
import { HotelRepository } from '../../infrastructure/repositories/hotel.repository.impl';
import { HotelModel } from 'src/infrastructure/models/hotel.models';
import { HotelController } from 'src/presentation/controllers/hotel.controller';


@Module({
    imports: [
        SequelizeModule.forFeature([HotelModel]),
    ],
    controllers: [HotelController],
    providers: [
        GetAllHotelsUseCase,
        CreateHotelUseCase,

        {
            provide: 'IHotelRepository',
            useClass: HotelRepository,
        },
    ],
})
export class HotelModule { }