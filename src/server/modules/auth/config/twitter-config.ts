import { ITwitterConfig } from '../interfaces/twitter-config.interface';

export const twitterConfig: ITwitterConfig = {
  consumer_key: 'gkeY5a5pIuKSwTRDNJwqnyCDZ',
  consumer_secret: 'XCrSo4BXergVa9TIfCaK1oNLCdM53cBu75RMevVBDZ3jnB7dQN',
  request_token_uri: 'https://api.twitter.com/oauth/request_token',
  login_dialog_uri: 'https://api.twitter.com/oauth/authenticate',
  access_token_uri: 'https://api.twitter.com/oauth/access_token',
  oauth_redirect_uri: 'http://localhost:4200/recipes'
};
