import { Inject } from "@nestjs/common";

import { Residence } from "src/domain/entities/residence.entity";
import { IResidenceRepository } from "src/domain/repositories/residence.repository";
import { ResidenceDTO } from "src/presentation/dtos/residence.dto";


export class CreateResidenceUseCase {
  constructor(@Inject('IResidenceRepository') private readonly residenceRepository: IResidenceRepository) { }

  async execute(residenceDTO: ResidenceDTO): Promise<void> {

    const residence = this.createResidence(residenceDTO);
    await this.residenceRepository.create(residence);
  }

  createResidence(residenceDTO: ResidenceDTO): Residence {
    const id = new Date().toISOString();
    return new Residence(
      id,
      residenceDTO.name,
      residenceDTO.location,
      residenceDTO.units,
      residenceDTO.amenities,
      residenceDTO.pricePerMonth
    );
  };
}
