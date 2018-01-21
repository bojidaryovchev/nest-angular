import { Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  firstName: string;
  lastName: string;
  salt: string;
  hashedPassword: string;
  roles: string[];
}
