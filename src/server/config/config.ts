import { normalize, join } from 'path';

interface IEnvironmentConfig {
  rootPath: string;
  db: string;
  port: number;
  jwtSecret: string;
}

interface IConfig {
  [key: string]: IEnvironmentConfig;
  development: IEnvironmentConfig;
  production: IEnvironmentConfig;
}

const rootPath = process.cwd();

const Config: IConfig = {
  development: {
    rootPath,
    db: 'mongodb://localhost:27017/store',
    port: 1337,
    jwtSecret: 'secret'
  },
  production: {
    rootPath,
    db: process.env.MONGODB_CONNECTION,
    port: +process.env.PORT,
    jwtSecret: process.env.JWT_SECRET
  }
};

export {
  IEnvironmentConfig,
  IConfig,
  Config
};
