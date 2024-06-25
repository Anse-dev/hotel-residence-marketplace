import { IHotelRepository } from '../../../domain/repositories/hotel.repository';

import { Hotel } from '../../../domain/entities/hotel.entity';
import { Inject } from '@nestjs/common';
import { HotelDTO } from 'src/presentation/dtos/hotel.dto';

export class CreateHotelUseCase {
  constructor(@Inject('IHotelRepository')
  private readonly hotelRepository: IHotelRepository) { }

  async execute(hotelDTO: HotelDTO): Promise<void> {
    const hotel = this.createHotel(hotelDTO);
    await this.hotelRepository.create(hotel);
  }
  createHotel(hotelDTO: HotelDTO): Hotel {
    const id = new Date().toISOString();
    return new Hotel(
      id,
      hotelDTO.name,
      hotelDTO.location,
      hotelDTO.rooms,
      hotelDTO.amenities,
      hotelDTO.pricePerNight
    );
  };
}