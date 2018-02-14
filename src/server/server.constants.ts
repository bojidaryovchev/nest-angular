import { Config, IEnvironmentConfig } from './config/config';

const env = process.env.NODE_ENV || 'development';

export const SERVER_CONFIG: IEnvironmentConfig = Config[env];

export const DB_CONNECTION_TOKEN: string = 'DbConnectionToken';
export const USER_MODEL_TOKEN: string = 'UserModelToken';

export const JWT_SECRET: string = 'this is a secret';

export const MESSAGES = {
  FORBIDDEN_EMAIL_IN_USE: 'The email already exists',
  UNAUTHORIZED_INVALID_PASSWORD: 'Invalid password',
  UNAUTHORIZED_INVALID_EMAIL: 'The email does not exist'
};
