import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Model, Sequelize } from 'sequelize-typescript';
import { Residence } from '../../domain/entities/residence.entity';
import { IResidenceRepository } from '../../domain/repositories/residence.repository';

@Injectable()
export class ResidenceRepository implements IResidenceRepository {
    constructor(
        @InjectModel(Residence)
        private readonly residenceModel: typeof Residence,
    ) { }
    findById(id: string): Promise<Residence | null> {
        throw new Error('Method not implemented.');
    }

    async findAll(): Promise<Residence[]> {
        return this.residenceModel.findAll();
    }

    async create(residence: Partial<Residence>): Promise<void> {
        await this.residenceModel.create(residence);
    }
}