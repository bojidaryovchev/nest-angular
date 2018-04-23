import { normalize, join } from 'path';

interface IEnvironmentConfig {
  rootPath: string;
  db: string;
  port: number;
  jwtSecret: string;
  origin: string;
  protocol: string;
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
    jwtSecret: 'secret',
    origin: 'localhost',
    protocol: 'http'
  },
  production: {
    rootPath,
    db: process.env.MONGODB_CONNECTION,
    port: +process.env.PORT,
    jwtSecret: process.env.JWT_SECRET,
    origin: process.env.ORIGIN,
    protocol: process.env.PROTOCOL
  }
};

export {
  IEnvironmentConfig,
  IConfig,
  Config
};
