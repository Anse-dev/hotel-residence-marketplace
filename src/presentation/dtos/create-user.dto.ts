// src/application/dtos/user/create-user.dto.ts

import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ example: 'user@example.com' })
    readonly email: string;

    @ApiProperty({ example: 'strongPassword123' })
    readonly password: string;

    @ApiProperty({ example: '+123456789' })
    readonly phoneNumber: string;

    @ApiProperty({ example: 'John Doe', required: false })
    readonly name?: string;
}
