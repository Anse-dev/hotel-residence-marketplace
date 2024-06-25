

import { Inject, Injectable } from '@nestjs/common';
import { User } from '../../../domain/entities/user.entity';
import { IUserRepository } from '../../../domain/repositories/user.repository';
import { CreateUserDto } from 'src/presentation/dtos/create-user.dto';
import { HashService } from 'src/infrastructure/services/hash.service';


@Injectable()
export class RegisterUserUseCase {
    constructor(
        @Inject('IUserRepository') private readonly userRepository: IUserRepository,
        private readonly hashService: HashService,
    ) { }

    async execute(createUserDto: CreateUserDto): Promise<User> {

        const existingUser = await this.userRepository.findByEmail(createUserDto.email);
        if (existingUser) {
            throw new Error('User already exists');
        }

        const hashedPassword = await this.hashService.hashPassword(createUserDto.password);

        const { email, phoneNumber, name } = createUserDto;
        const user = new User(email, phoneNumber, name, hashedPassword);
        return this.userRepository.createUser(user);


    }
}
