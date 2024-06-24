import { Inject } from "@nestjs/common";
import { ResidenceDTO } from "src/application/dtos/residence.dto";
import { Residence } from "src/domain/entities/residence.entity";
import { IResidenceRepository } from "src/domain/repositories/residence.repository";


export class CreateResidenceUseCase {
  constructor(@Inject('IResidenceRepository') private readonly residenceRepository: IResidenceRepository) { }

  async execute(residenceDTO: ResidenceDTO): Promise<void> {
    const residence = new Residence();
    residence.id = new Date().toISOString();
    residence.name = residenceDTO.name;
    residence.location = residenceDTO.location;
    residence.units = residenceDTO.units;
    residence.amenities = residenceDTO.amenities;
    residence.pricePerMonth = residenceDTO.pricePerMonth;

    await this.residenceRepository.create(residence);
  }
}
