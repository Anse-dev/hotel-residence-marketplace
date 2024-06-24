import { Inject, Injectable } from '@nestjs/common';
import { Hotel } from 'src/domain/entities/hotel.entity';
import { IHotelRepository } from 'src/domain/repositories/hotel.repository';

@Injectable() // Assurez-vous que cette annotation est présente
export class GetAllHotelsUseCase {
    constructor(@Inject('IHotelRepository')
    private readonly hotelRepository: IHotelRepository) { }

    async execute(): Promise<Hotel[]> {
        return await this.hotelRepository.findAll();
    }
}
