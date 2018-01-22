import { Connection } from 'mongoose';
import { IEnvironmentConfig } from './config';
import mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = (config: IEnvironmentConfig) => {
  mongoose.connect(config.db, {useMongoClient: true});

  const db: Connection = mongoose.connection;

  db.once('open', (err: Error) => {
    if (err) {
      console.error(err);
    }

    console.log('MongoDB ready!');
  });

  db.on('error', (err: Error) => console.error(err));
};
