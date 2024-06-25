import { Controller, Get, Post, Body, UseInterceptors, Put, UseGuards } from '@nestjs/common';
import { GetAllHotelsUseCase } from '../../application/use-cases/hotel/get-all-hotels.use-case';
import { CreateHotelUseCase } from '../../application/use-cases/hotel/create-hotel.use-case';


import { ErrorResponseInterceptor } from '../interceptors/error-response.interceptor';
import { HotelDTO } from '../dtos/hotel.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateHotelierDto } from '../dtos/update-hotelier.dto';
import { UpdateHotelierProfileUseCase } from 'src/application/use-cases/user/update-hotelier-profile.use-case';
import { RegisterHotelierUseCase } from 'src/application/use-cases/user/register-hotelier.use-case';
import { CreateHotelierDto } from '../dtos/create-hotelier.dto';
import { JwtAuthGuard } from 'src/infrastructure/shared/guards/jwt-auth.guard';
@UseInterceptors(ErrorResponseInterceptor)
@ApiTags('hoteliers')
@Controller('hoteliers')
export class HotelierController {
    constructor(
        private readonly registerHotelierUseCase: RegisterHotelierUseCase,
        private readonly updateHotelierProfileUseCase: UpdateHotelierProfileUseCase,
    ) { }

    @Post('register')
    @ApiOperation({ summary: 'Register a new hotelier' })
    @ApiResponse({ status: 201, description: 'The hotelier has been successfully created.' })
    @ApiResponse({ status: 400, description: 'Bad Request.' })
    async register(@Body() createHotelierDto: CreateHotelierDto) {
        return this.registerHotelierUseCase.execute(createHotelierDto);
    }

    @Put('update')
    @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: 'Update hotelier profile' })
    @ApiResponse({ status: 200, description: 'The hotelier profile has been successfully updated.' })
    @ApiResponse({ status: 400, description: 'Bad Request.' })
    async update(@Body() updateHotelierDto: UpdateHotelierDto) {
        return this.updateHotelierProfileUseCase.execute(updateHotelierDto);
    }
}