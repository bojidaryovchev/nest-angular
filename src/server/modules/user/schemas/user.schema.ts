import { Schema } from 'mongoose';

export const UserSchema: Schema = new Schema({
  method: {
    type: String,
    enum: ['local', 'google', 'facebook'],
    required: true
  },
  local: {
    email: {type: String, lowercase: true, unique: true},
    salt: String,
    hashedPassword: String
  },
  google: {
    id: String,
    email: String
  },
  facebook: {
    id: String,
    email: String
  }
});
