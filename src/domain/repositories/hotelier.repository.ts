// src/domain/repositories/hotelier.repository.ts

import { Hotelier } from '../entities/hotelier.entity';

export interface IHotelierRepository {
    findByEmail(email: string): Promise<Hotelier | null>;
    createHotelier(hotelier: Hotelier): Promise<Hotelier>;
    updateHotelier(hotelier: Hotelier): Promise<Hotelier>;
}
