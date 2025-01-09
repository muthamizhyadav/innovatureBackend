import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { AuthToken } from './auth-token';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly authToken: AuthToken) {}

  use(req: Request, res: Response, next: Function) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      throw new UnauthorizedException('Authorization header missing');
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Token missing');
    }

    try {
      const payload = this.authToken.verifyToken(token);
      req['user'] = payload;
      next();
    } catch (err) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
