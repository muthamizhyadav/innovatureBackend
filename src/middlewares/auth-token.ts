import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthToken {
    constructor(private readonly jwtService: JwtService) { }
    // Generate JWT
    generateToken(payload: { userId: string }): string {
        return this.jwtService.sign(payload);
    }

    // Verify JWT
    verifyToken(token: string): any {
        try {
            return this.jwtService.verify(token);
        } catch (e) {
            throw new Error('Invalid token');
        }
    }
}
