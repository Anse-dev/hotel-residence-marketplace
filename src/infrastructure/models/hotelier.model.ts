

import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'hoteliers', timestamps: true, })
export class HotelierModel extends Model<HotelierModel> {
    @Column({ allowNull: false })
    email: string;

    @Column({ allowNull: false })
    password: string;

    @Column({ allowNull: false })
    phoneNumber: string;

    @Column({ allowNull: false })
    companyName: string;

    @Column
    companyLogo: string;

    @Column
    companyDescription: string;

    @Column
    address: string;

   
}
