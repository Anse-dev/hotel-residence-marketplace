
import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'users', timestamps: true, })
export class UserModel extends Model<UserModel> {
    @Column({ allowNull: false })
    email: string;

    @Column({ allowNull: false })
    password: string;

    @Column({ allowNull: false })
    phoneNumber: string;

    @Column({ allowNull: false })
    role: string; // 'user' or 'hotelier'

    @Column
    name: string;

    @Column
    profilePicture: string;

    @Column
    address: string;

}
