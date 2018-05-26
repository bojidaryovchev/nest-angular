import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';

import { USER_MODEL_TOKEN } from '../../server.constants';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_MODEL_TOKEN) private readonly userModel: Model<IUser>
  ) {}
}
