import { FACEBOOK_CONFIG_TOKEN, TWITTER_CONFIG_TOKEN } from '../../server.constants';
import { facebookConfig } from './config/facebook-config';
import { twitterConfig } from './config/twitter-config';

export const authProviders = [
  {
    provide: FACEBOOK_CONFIG_TOKEN,
    useValue: facebookConfig
  },
  {
    provide: TWITTER_CONFIG_TOKEN,
    useValue: twitterConfig
  }
];