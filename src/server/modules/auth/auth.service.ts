import { Component, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { sign } from 'jsonwebtoken';

import { SERVER_CONFIG, USER_MODEL_TOKEN } from '../../server.constants';
import { IUser } from '../user/interfaces/user.interface';
import { IToken } from './interfaces/token.interface';

@Component()
export class AuthService {
  constructor(
    @Inject(USER_MODEL_TOKEN) private readonly userModel: Model<IUser>
  ) {}

  async createToken(user: IUser): Promise<IToken> {
    const expiresIn: string = '48h';
    const token: string = sign({
      sub: user.id
    }, SERVER_CONFIG.jwtSecret, {expiresIn});

    return {
      token
    };
  }

  async validateUser(payload: any): Promise<boolean> {
    const user: IUser = await this.userModel.findById(payload.sub);

    if (user) {
      return true;
    }

    return false;
  }
}
