import { AuthService, LoginMethods } from '@pw-tech/web-sdk';

const webSDK = AuthService.getInstance({
  clientSecret: import.meta.env.VITE_CLIENT_SECRET,
  organizationId: import.meta.env.VITE_ORGANISATION_ID,
  apiBaseUrl: import.meta.env.VITE_BASE_URL,
  loginMethods: [LoginMethods.OTP, LoginMethods.PASSWORD],
  localStorageFallback: true,
  clientId: 'system-admin',
  contextIdentifier: 'TOKEN_CONTEXT',
  loginPageUrl: '/test-engine-window',
  debugMode: false,
});

export default webSDK;
