
import { Inject, Injectable } from '@nestjs/common';
import { Hotelier } from '../../../domain/entities/hotelier.entity';
import { IHotelierRepository } from '../../../domain/repositories/hotelier.repository';
import { UpdateHotelierDto } from 'src/presentation/dtos/update-hotelier.dto';


@Injectable()
export class UpdateHotelierProfileUseCase {
    constructor(@Inject('IHotelierRepository') private readonly hotelierRepository: IHotelierRepository) { }

    async execute(updateHotelierDto: UpdateHotelierDto): Promise<Hotelier> {

        const { email, phoneNumber, name, hotelName, address } = updateHotelierDto;
        const hotelier = new Hotelier(email, phoneNumber, name, hotelName, address);

        return this.hotelierRepository.updateHotelier(hotelier);
    }
}
