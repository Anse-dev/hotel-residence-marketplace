// src/infrastructure/repositories/hotelier.repository.impl.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Hotelier } from '../../domain/entities/hotelier.entity';

import { HotelierModel } from '../models/hotelier.model';
import { IHotelierRepository } from 'src/domain/repositories/hotelier.repository';

@Injectable()
export class HotelierRepository implements IHotelierRepository {
    constructor(@InjectModel(HotelierModel) private hotelierModel: typeof HotelierModel) { }

    async findByEmail(email: string): Promise<Hotelier | null> {
        const hotelier = await this.hotelierModel.findOne({ where: { email } });
        if (!hotelier) {
            return null;
        }

        return new Hotelier(hotelier.email, hotelier.password, hotelier.phoneNumber, hotelier.companyName);
    }

    async createHotelier(hotelier: Hotelier): Promise<Hotelier> {
        const createdHotelier = await this.hotelierModel.create({ ...hotelier });
        return new Hotelier(createdHotelier.email, createdHotelier.password, createdHotelier.phoneNumber, createdHotelier.companyName);
    }

    async updateHotelier(hotelier: Hotelier): Promise<Hotelier> {
        //TODO : add id 
        await this.hotelierModel.update({ ...hotelier }, { where: { id: 1 } });
        const updatedHotelier = await this.hotelierModel.findByPk(1);
        return new Hotelier(updatedHotelier.email, updatedHotelier.password, updatedHotelier.phoneNumber, updatedHotelier.companyName);
    }
}
