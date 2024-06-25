

import { Inject, Injectable } from '@nestjs/common';
import { Hotelier } from '../../../domain/entities/hotelier.entity';
import { IHotelierRepository } from '../../../domain/repositories/hotelier.repository';
import { CreateHotelierDto } from 'src/presentation/dtos/create-hotelier.dto';


@Injectable()
export class RegisterHotelierUseCase {
    constructor(@Inject('IHotelierRepository') private readonly hotelierRepository: IHotelierRepository) { }

    async execute(createHotelierDto: CreateHotelierDto): Promise<Hotelier> {
        const { email, phoneNumber, name, hotelName, address } = createHotelierDto;

        const hotelier = new Hotelier(email, phoneNumber, name, hotelName, address);
        const existingHotelier = await this.hotelierRepository.findByEmail(hotelier.getEmail());
        if (existingHotelier) {
            throw new Error('Hotelier already exists');
        }
        return this.hotelierRepository.createHotelier(hotelier);
    }
}
