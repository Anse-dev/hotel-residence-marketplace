import { Hotel } from '../entities/hotel.entity';

export interface IHotelRepository {
    findAll(): Promise<Hotel[]>;
    findById(id: string): Promise<Hotel | null>;
    create(hotel: Partial<Hotel>): Promise<Hotel>;
}