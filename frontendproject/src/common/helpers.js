import { refreshToken, saveTokensToLocalStorage } from './authService';
import messages from './errorMessages';

const isExpired = (expirationDate) => new Date(expirationDate) < Date.now();

export const getToken = async () => {
 const accessToken = JSON.parse(window.localStorage.getItem('token'));
 if (accessToken && !isExpired(accessToken.exp)) {
  return accessToken.token;
 }
 const refreshTokenObj = JSON.parse(
  window.localStorage.getItem('refresh_token')
 );
 if (refreshTokenObj) {
  try {
   const newTokens = await refreshToken(refreshTokenObj.token);
   saveTokensToLocalStorage(newTokens.accessToken, newTokens.refreshToken);
   return newTokens.accessToken.token;
  } catch (error) {
   console.log(error);
   throw new Error(messages.CANT_GET_ACCESS_TOKEN);
  }
 }
 throw new Error(messages.NO_REFRESH_TOKEN);
};
