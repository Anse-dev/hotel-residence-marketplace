import { Controller, Get, Post, Body, UseInterceptors } from '@nestjs/common';

import { ResidenceDTO } from '../../application/dtos/residence.dto';
import { CreateResidenceUseCase } from 'src/application/use-cases/residence/create-residence.use-case';
import { GetAllResidencesUseCase } from 'src/application/use-cases/residence/get-all-residences.use-case';
import { ErrorResponseInterceptor } from '../interceptors/error-response.interceptor';
@UseInterceptors(ErrorResponseInterceptor)
@Controller('residences')
export class ResidenceController {
    constructor(
        private readonly getAllResidencesUseCase: GetAllResidencesUseCase,
        private readonly createResidenceUseCase: CreateResidenceUseCase,
    ) { }

    @Get()
    async getAll() {
        return this.getAllResidencesUseCase.execute();
    }

    @Post()
    async create(@Body() residenceDTO: ResidenceDTO) {
        await this.createResidenceUseCase.execute(residenceDTO);
    }
}
