
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { GetAllResidencesUseCase } from '../../application/use-cases/residence/get-all-residences.use-case';
import { Residence } from '../../domain/entities/residence.entity';
import { ResidenceRepository } from '../../infrastructure/repositories/residence.repository.impl';
import { ResidenceController } from '../../presentation/controllers/residence.controller';
import { CreateResidenceUseCase } from 'src/application/use-cases/residence/create-residence.use-case';
import { ResidenceModel } from 'src/infrastructure/models/residence.model';

@Module({
    imports: [
        SequelizeModule.forFeature([ResidenceModel]),
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
