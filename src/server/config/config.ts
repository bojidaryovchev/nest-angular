import { normalize, join } from 'path';

interface IEnvironmentConfig {
  rootPath: string;
  db: string;
  port: number;
  sessionSecret: string;
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
    sessionSecret: 'secret'
  },
  production: {
    rootPath,
    db: process.env.MONGODB_CONNECTION,
    port: +process.env.PORT,
    sessionSecret: process.env.SESSION_SECRET
  }
};

export {
  IEnvironmentConfig,
  IConfig,
  Config
};
