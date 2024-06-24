
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Hotel } from '../../domain/entities/hotel.entity';
import { ModelCtor } from 'sequelize-typescript';
import { IHotelRepository } from 'src/domain/repositories/hotel.repository';

@Injectable()
export class HotelRepository implements IHotelRepository {
    constructor(
        @InjectModel(Hotel) private readonly hotelModel: ModelCtor<Hotel>,
    ) { }
    findById(id: string): Promise<Hotel | null> {
        throw new Error('Method not implemented.');
    }

    async findAll(): Promise<Hotel[]> {
        return this.hotelModel.findAll();
    }

    async create(hotel: Partial<Hotel>): Promise<Hotel> {
        console.log(hotel)
        return this.hotelModel.create(hotel);
    }
}
