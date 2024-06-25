
import { Sequelize } from 'sequelize-typescript';
import { Hotel } from 'src/domain/entities/hotel.entity';
import { Residence } from 'src/domain/entities/residence.entity';
import { HotelModel } from '../models/hotel.models';
import { ResidenceModel } from '../models/residence.model';
import { HotelierModel } from '../models/hotelier.model';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'sqlite',
                storage: 'database.sqlite',
                logging: false,
            });
            sequelize.addModels([HotelModel, ResidenceModel, HotelierModel]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
