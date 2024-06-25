

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../../domain/entities/user.entity';
import { IUserRepository } from '../../domain/repositories/user.repository';
import { UserModel } from '../models/user.model';


@Injectable()
export class UserRepository implements IUserRepository {
  constructor(@InjectModel(UserModel) private userModel: typeof UserModel) { }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.userModel.findOne({ where: { email } });
    if (!user) {
      return null;
    }
    throw new Error('Method not implemented.');
  }

  async createUser(user: User): Promise<User> {
    const createdUser = await this.userModel.create({ ...user });
    throw new Error('Method not implemented.');
  }
}
