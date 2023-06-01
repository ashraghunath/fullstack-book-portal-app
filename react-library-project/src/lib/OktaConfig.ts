export const oktaConfig = {
    clientId: '0oa9s83x950x2dKNF5d7',
    issuer: 'https://dev-66698720.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}