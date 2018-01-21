import { model, Schema } from 'mongoose';
import { generateHashedPassword } from '../utilities/encryption';
import { IUser } from '../interfaces/user.interface';

const userSchema: Schema = new Schema({
  username: {type: String, required: true, unique: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  salt: String,
  hashedPassword: String,
  roles: [String]
});

userSchema.method({
  authenticate: (password: string) => {
    if (generateHashedPassword(this.salt, password) === this.hashedPassword) {
      return true;
    }

    return false;
  }
});

const User = model<IUser>('User', userSchema);

export {
  User
};
