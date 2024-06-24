// src/application/use-cases/residence/get-all-residences.use-case.ts
import { Inject, Injectable } from '@nestjs/common';
import { Residence } from '../../../domain/entities/residence.entity';
import { IResidenceRepository } from 'src/domain/repositories/residence.repository';


@Injectable()
export class GetAllResidencesUseCase {
    constructor(@Inject('IResidenceRepository') private readonly residenceRepository: IResidenceRepository) { }

    async execute(): Promise<Residence[]> {
        return this.residenceRepository.findAll();
    }
}
