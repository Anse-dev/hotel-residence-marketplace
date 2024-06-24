
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { GetAllResidencesUseCase } from '../../application/use-cases/residence/get-all-residences.use-case';
import { Residence } from '../../domain/entities/residence.entity';
import { ResidenceRepository } from '../../infrastructure/repositories/residence.repository';
import { ResidenceController } from '../../presentation/controllers/residence.controller';
import { CreateResidenceUseCase } from 'src/application/use-cases/residence/create-residence.use-case';

@Module({
    imports: [
        SequelizeModule.forFeature([Residence]),
    ],
    controllers: [ResidenceController],
    providers: [
        GetAllResidencesUseCase,
        CreateResidenceUseCase,
        {
            provide: 'IResidenceRepository',
            useClass: ResidenceRepository,
        },

    ],

})
export class ResidenceModule { }
