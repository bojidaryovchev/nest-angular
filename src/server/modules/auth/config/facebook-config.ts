import { IFacebookConfig } from '../interfaces/facebook-config.interface';

export const facebookConfig: IFacebookConfig = {
  login_dialog_uri: 'https://www.facebook.com/v2.12/dialog/oauth',
  access_token_uri: 'https://graph.facebook.com/v2.12/oauth/access_token',
  client_id: '545785722443649',
  client_secret: 'a7b3b484ed5b0217b89824541eca1f4e',
  oauth_redirect_uri: 'http://localhost:4200/recipes',
  state: '{fbstate}'
};
