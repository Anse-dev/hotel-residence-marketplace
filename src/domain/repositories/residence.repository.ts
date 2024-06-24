import { Residence } from '../entities/residence.entity';

export interface IResidenceRepository {
    findAll(): Promise<Residence[]>;
    findById(id: string): Promise<Residence | null>;
    create(residence: Residence): Promise<void>;
}