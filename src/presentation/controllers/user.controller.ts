// src/presentation/controllers/user.controller.ts

import { Body, Controller, Post } from '@nestjs/common';

import { RegisterUserUseCase } from '../../application/use-cases/user/register-user.use-case';
import { AuthenticateUserUseCase } from '../../application/use-cases/user/authenticate-user.use-case';
import { CreateUserDto } from '../dtos/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserController {
    constructor(
        private readonly registerUserUseCase: RegisterUserUseCase,
        private readonly authenticateUserUseCase: AuthenticateUserUseCase,
    ) { }

    @Post('register')
    @ApiOperation({ summary: 'Register a new user' })
    @ApiResponse({ status: 201, description: 'The user has been successfully created.' })
    @ApiResponse({ status: 400, description: 'Bad Request.' })
    async register(@Body() createUserDto: CreateUserDto) {
        return this.registerUserUseCase.execute(createUserDto);
    }
    @Post('auth')
    @ApiOperation({ summary: 'Authenticate a user' })
    @ApiResponse({ status: 200, description: 'Login successful.' })
    @ApiResponse({ status: 401, description: 'Invalid credentials.' })
    async login(@Body('email') email: string, @Body('password') password: string) {
        const result = await this.authenticateUserUseCase.execute(email, password);
        if (!result) {
            throw new Error('Invalid credentials');
        }
        return { message: 'Login successful' };
    }
}
