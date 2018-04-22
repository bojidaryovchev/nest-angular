import { Document } from 'mongoose';

export interface IUser extends Document {
  method: string;
  local: {
    email: string;
    salt: string;
    hashedPassword: string;
    roles: string[];
  };
  google: {
    id: string,
    email: string
  };
  facebook: {
    id: string,
    email: string
  };
  twitter: {
    id: string;
    username: string;
    displayName: string;
  };
}
