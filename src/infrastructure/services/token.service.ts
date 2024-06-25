

import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class TokenService {
    private readonly jwtSecret = process.env.JWT_SECRET || 'secret';

    generateToken(payload: any): string {
        return jwt.sign(payload, this.jwtSecret, { expiresIn: '1h' });
    }

    verifyToken(token: string): any {
        return jwt.verify(token, this.jwtSecret);
    }
}
