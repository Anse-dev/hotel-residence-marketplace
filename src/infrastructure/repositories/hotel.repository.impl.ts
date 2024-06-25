
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Hotel } from '../../domain/entities/hotel.entity';
import { ModelCtor } from 'sequelize-typescript';
import { IHotelRepository } from 'src/domain/repositories/hotel.repository';
import { HotelModel } from '../models/hotel.models';

@Injectable()
export class HotelRepository implements IHotelRepository {
    constructor(
        @InjectModel(HotelModel) private readonly hotelModel: ModelCtor<HotelModel>,
    ) { }
    findById(id: string): Promise<Hotel | null> {
        throw new Error('Method not implemented.');
    }

    async findAll(): Promise<Hotel[]> {
        throw new Error('Method not implemented.');
        /*       return this.hotelModel.findAll(); */
    }

    async create(hotel: Partial<Hotel>): Promise<Hotel> {
        console.log(hotel)
        throw new Error('Method not implemented.');
        /* return this.hotelModel.create(hotel); */
    }
}
