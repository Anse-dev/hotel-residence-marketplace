import { Controller, Get, Post, Body, UseInterceptors } from '@nestjs/common';
import { GetAllHotelsUseCase } from '../../application/use-cases/hotel/get-all-hotels.use-case';
import { CreateHotelUseCase } from '../../application/use-cases/hotel/create-hotel.use-case';
import { HotelDTO } from '../../application/dtos/hotel.dto';

import { ErrorResponseInterceptor } from '../interceptors/error-response.interceptor';
@UseInterceptors(ErrorResponseInterceptor)
@Controller('hotels')
export class HotelController {
    constructor(
        private readonly getAllHotelsUseCase: GetAllHotelsUseCase,
        private readonly createHotelUseCase: CreateHotelUseCase,
    ) { }

    @Get()
    async getAll() {
        return this.getAllHotelsUseCase.execute();
    }

    @Post()
    async create(@Body() hotelDTO: HotelDTO) {
        console.log(hotelDTO);

        await this.createHotelUseCase.execute(hotelDTO);
    }
}