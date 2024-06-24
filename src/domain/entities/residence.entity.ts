
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'residences', timestamps: true, })
export class Residence extends Model {
    @Column({ primaryKey: true })
    id: string;

    @Column
    name: string;

    @Column
    location: string;

    @Column
    units: number;

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
    pricePerMonth: number;
}
