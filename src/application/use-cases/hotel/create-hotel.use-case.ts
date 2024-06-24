import { IHotelRepository } from '../../../domain/repositories/hotel.repository';
import { HotelDTO } from '../../dtos/hotel.dto';
import { Hotel } from '../../../domain/entities/hotel.entity';
import { Inject } from '@nestjs/common';

export class CreateHotelUseCase {
  constructor(@Inject('IHotelRepository')
  private readonly hotelRepository: IHotelRepository) { }

  async execute(hotelDTO: HotelDTO): Promise<void> {
    const hotel = new Hotel();
    hotel.id = new Date().toISOString();

    hotel.name = hotelDTO.name;
    hotel.location = hotelDTO.location;
    hotel.rooms = hotelDTO.rooms;
    hotel.amenities = hotelDTO.amenities;
    hotel.pricePerNight = hotelDTO.pricePerNight;

    await this.hotelRepository.create(hotel);
  }
}