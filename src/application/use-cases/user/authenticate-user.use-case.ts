
import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from '../../../domain/repositories/user.repository';
import { HashService } from 'src/infrastructure/services/hash.service';
import { TokenService } from 'src/infrastructure/services/token.service';

@Injectable()
export class AuthenticateUserUseCase {
    constructor(@Inject('IUserRepository') private readonly userRepository: IUserRepository,
        private readonly hashService: HashService,
        private readonly tokenService: TokenService,
    ) { }

    async execute(email: string, password: string): Promise<string> {
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new Error('Invalid credentials');
        }

        const isPasswordValid = await this.hashService.comparePassword(password, user.getPassword());
        if (!isPasswordValid) {
            throw new Error('Invalid credentials');
        }

        const token = this.tokenService.generateToken({ id: 1, email: user.getEmail() });
        return token;
    }
}
