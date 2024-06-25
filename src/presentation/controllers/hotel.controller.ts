import { Controller, Get, Post, Body, UseInterceptors } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GetAllHotelsUseCase } from '../../application/use-cases/hotel/get-all-hotels.use-case';
import { CreateHotelUseCase } from '../../application/use-cases/hotel/create-hotel.use-case';
import { ErrorResponseInterceptor } from '../interceptors/error-response.interceptor';
import { HotelDTO } from '../dtos/hotel.dto';

@ApiTags('hotels')
@UseInterceptors(ErrorResponseInterceptor)
@Controller('hotels')
export class HotelController {
    constructor(
        private readonly getAllHotelsUseCase: GetAllHotelsUseCase,
        private readonly createHotelUseCase: CreateHotelUseCase,
    ) { }

    @Get()
    @ApiOperation({ summary: 'Get all hotels' })
    @ApiResponse({ status: 200, description: 'Return all hotels.' })
    @ApiResponse({ status: 500, description: 'Internal server error.' })
    async getAll() {
        return this.getAllHotelsUseCase.execute();
    }

    @Post()
    @ApiOperation({ summary: 'Create a new hotel' })
    @ApiResponse({ status: 201, description: 'The hotel has been successfully created.' })
    @ApiResponse({ status: 400, description: 'Bad request.' })
    @ApiResponse({ status: 500, description: 'Internal server error.' })
    async create(@Body() hotelDTO: HotelDTO) {
        console.log(hotelDTO);
        await this.createHotelUseCase.execute(hotelDTO);
    }
}
