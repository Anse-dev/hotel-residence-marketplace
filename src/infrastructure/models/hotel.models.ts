import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({ tableName: 'hotels', timestamps: true, })

export class HotelModel extends Model {
    @Column({ primaryKey: true })
    id: string;

    @Column
    name: string;

    @Column
    location: string;

    @Column
    rooms: number;

    @Column({
        type: DataType.TEXT,
        get() {
            const rawValue = this.getDataValue('amenities');
            return rawValue ? JSON.parse(rawValue) : [];
        },
        set(value: string[]) {
            this.setDataValue('amenities', JSON.stringify(value));
        },
    })
    amenities: string[];

    @Column
    pricePerNight: number;
}
