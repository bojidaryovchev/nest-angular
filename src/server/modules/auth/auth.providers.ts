import { FACEBOOK_CONFIG_TOKEN } from '../../server.constants';
import { facebookConfig } from './config/facebook-config';

export const authProviders = [
  {
    provide: FACEBOOK_CONFIG_TOKEN,
    useValue: facebookConfig
  }
];