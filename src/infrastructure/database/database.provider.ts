
import { Sequelize } from 'sequelize-typescript';
import { Hotel } from 'src/domain/entities/hotel.entity';
import { Residence } from 'src/domain/entities/residence.entity';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'sqlite',
                storage: 'database.sqlite',
                logging: false,
            });
            sequelize.addModels([Hotel, Residence]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
