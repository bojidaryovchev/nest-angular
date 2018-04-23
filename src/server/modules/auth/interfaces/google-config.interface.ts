export interface IGoogleConfig {
  login_dialog_uri: string;
  client_id: string;
  client_secret: string;
  oauth_redirect_uri: string;
  access_token_uri: string;
  response_type: string;
  scopes: string[];
  grant_type: string;
};
