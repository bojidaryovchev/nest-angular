import * as mongoose from 'mongoose';
import { SERVER_CONFIG, DB_CONNECTION_TOKEN } from '../../server.constants';

export const databaseProviders = [
  {
    provide: DB_CONNECTION_TOKEN,
    useFactory: async () => {
      (mongoose as any).Promise = global.Promise;

      return await mongoose.connect(SERVER_CONFIG.db, {
        useMongoClient: true,
      });
    },
  },
];