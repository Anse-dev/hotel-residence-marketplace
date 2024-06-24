import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CreateHotelUseCase } from '../../application/use-cases/hotel/create-hotel.use-case';
import { GetAllHotelsUseCase } from '../../application/use-cases/hotel/get-all-hotels.use-case';
import { Hotel } from '../../domain/entities/hotel.entity';
import { HotelRepository } from '../../infrastructure/repositories/hotel.repository';
import { HotelController } from '../../presentation/controllers/hotel.controller';


@Module({
    imports: [
        SequelizeModule.forFeature([Hotel]),
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