import { Component, Inject, ForbiddenException } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { JWT_SECRET, MESSAGES } from '../../server.constants';
import { User } from '../user/models/user.model';
import { IUser } from '../user/interfaces/user.interface';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { IToken } from './interfaces/token.interface';
import { generateSalt, generateHashedPassword } from '../../utilities/encryption';
import { Request } from 'express';

@Component()
export class AuthService {
  constructor(
    // @Inject(USER_MODEL_TOKEN) private readonly userModel: Model<IUser>
  ) {}

  async signUserUp(createUserDto: CreateUserDto): Promise<IToken> {
    const { email, password } = createUserDto;

    if (await User.findOne({ 'local.email': email })) {
      throw new ForbiddenException(MESSAGES.FORBIDDEN_EMAIL_IN_USE);
    }

    const salt: string = generateSalt();
    const user: IUser = new User({
      method: 'local',
      local: {
        email,
        salt,
        hashedPassword: generateHashedPassword(salt, password)
      }
    });

    const createdUser: IUser = await user.save();

    return this.createToken(createdUser);
  }

  async signUserIn(req: Request): Promise<IToken> {
    return this.createToken(req.user);
  }

  async validateUser(payload: any): Promise<boolean> {
    const user = await User.findById(payload.sub);

    if (user) {
      return true;
    }

    return false;
  }

  private createToken(user: IUser): IToken {
    const expiresIn: string = '48h';
    const token: string = sign({
      sub: user.id
    }, JWT_SECRET, {expiresIn});

    return {
      token
    };
  }
}
