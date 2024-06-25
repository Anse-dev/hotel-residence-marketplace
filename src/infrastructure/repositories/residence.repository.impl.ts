import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Model, Sequelize } from 'sequelize-typescript';
import { Residence } from '../../domain/entities/residence.entity';
import { IResidenceRepository } from '../../domain/repositories/residence.repository';
import { ResidenceModel } from '../models/residence.model';

@Injectable()
export class ResidenceRepository implements IResidenceRepository {
    constructor(
        @InjectModel(ResidenceModel)
        private readonly residenceModel: typeof ResidenceModel
    ) { }
    findById(id: string): Promise<Residence | null> {
        throw new Error('Method not implemented.');
    }

    async findAll(): Promise<Residence[]> {
        /*   return this.residenceModel.findAll(); */
        throw new Error('Method not implemented.');
    }

    async create(residence: Partial<Residence>): Promise<void> {
        await this.residenceModel.create(residence);
    }
}