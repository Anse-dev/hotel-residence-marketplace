// src/application/dtos/user/create-hotelier.dto.ts

import { ApiProperty } from '@nestjs/swagger';

export class CreateHotelierDto {
    @ApiProperty({ example: 'hotelier@example.com' })
    readonly email: string;

    @ApiProperty({ example: 'strongPassword123' })
    readonly password: string;

    @ApiProperty({ example: '+123456789' })
    readonly phoneNumber: string;

    @ApiProperty({ example: 'John Doe', required: false })
    readonly name?: string;

    @ApiProperty({ example: 'Hotel Sunshine' })
    readonly hotelName: string;

    @ApiProperty({ example: '123 Main St, City, Country' })
    readonly address: string;
}
