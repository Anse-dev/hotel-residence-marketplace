

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from '../../infrastructure/models/user.model';
import { HotelierModel } from '../../infrastructure/models/hotelier.model';

import { RegisterHotelierUseCase } from '../../application/use-cases/user/register-hotelier.use-case';
import { UpdateHotelierProfileUseCase } from '../../application/use-cases/user/update-hotelier-profile.use-case';
import { AuthenticateUserUseCase } from 'src/application/use-cases/user/authenticate-user.use-case';
import { RegisterUserUseCase } from 'src/application/use-cases/user/register-user.use-case';
import { HotelierRepository } from 'src/infrastructure/repositories/hotelier.repository.impl';
import { UserRepository } from 'src/infrastructure/repositories/user.repository.impl';
import { UserController } from 'src/presentation/controllers/user.controller';
import { HotelierController } from 'src/presentation/controllers/hotelier.controller';
import { HashService } from 'src/infrastructure/services/hash.service';
import { TokenService } from 'src/infrastructure/services/token.service';
import { JwtAuthGuard } from 'src/infrastructure/shared/guards/jwt-auth.guard';

@Module({
    imports: [SequelizeModule.forFeature([UserModel, HotelierModel])],
    controllers: [UserController, HotelierController],
    providers: [
        UserRepository,
        HotelierRepository,
        RegisterUserUseCase,
        AuthenticateUserUseCase,
        RegisterHotelierUseCase,
        UpdateHotelierProfileUseCase,
        RegisterHotelierUseCase,
        HashService,
        TokenService,
        JwtAuthGuard,
        {
            provide: 'IUserRepository',
            useClass: UserRepository,
        },
        {
            provide: 'IHotelierRepository',
            useClass: HotelierRepository,
        },
    ],
})
export class UserModule { }
