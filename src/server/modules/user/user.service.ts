import { Component, Inject } from '@nestjs/common';
import { Model } from 'mongoose';

import { USER_MODEL_TOKEN } from '../../server.constants';
import { IUser } from './interfaces/user.interface';

@Component()
export class UserService {
  constructor(
    @Inject(USER_MODEL_TOKEN) private readonly userModel: Model<IUser>
  ) {}
}
