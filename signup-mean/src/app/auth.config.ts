import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  // Url of the Identity Provider
  issuer: '{oktaurl}/oauth2/default',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin,

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: '{clientID}',

  // set the scope for the permissions the client should request
  scope: 'openid profile email',
}
