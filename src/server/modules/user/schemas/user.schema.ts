import { Schema } from 'mongoose';

export const UserSchema: Schema = new Schema({
  method: {
    type: String,
    enum: ['local', 'google', 'facebook', 'twitter'],
    required: true
  },
  local: {
    email: {type: String, lowercase: true, unique: true, sparse: true},
    salt: String,
    hashedPassword: String
  },
  google: {
    id: String,
    email: String,
    displayName: String
  },
  facebook: {
    id: String,
    email: String
  },
  twitter: {
    id: String,
    username: String,
    displayName: String
  }
});
