import { httpRequest } from './apiServer';

export const saveTokensToLocalStorage = (accessToken, refreshToken) => {
 window.localStorage.setItem('token', JSON.stringify(accessToken));
 window.localStorage.setItem('refresh_token', JSON.stringify(refreshToken));
};

export const signin = async (username, password) => {
 const signinRoute = 'auth/signin';
 const requestType = 'POST';
 const isWithHeaders = false;
 const userObj = await httpRequest(
  signinRoute,
  { username, password },
  requestType,
  isWithHeaders
 );
 saveTokensToLocalStorage(
  userObj.result.accessToken,
  userObj.result.refreshToken
 );
 return {
  id: userObj.result.id,
  name: userObj.result.name,
  username: userObj.result.username,
  role: userObj.result.role,
 };
};

export const refreshToken = async (refreshToken) => {
 const refreshRoute = 'auth/refresh-token';
 const requestType = 'POST';
 const isWithHeaders = false;
 try {
  const tokenObj = await httpRequest(
   refreshRoute,
   { refreshToken },
   requestType,
   isWithHeaders
  );
  saveTokensToLocalStorage(
   tokenObj.result.accessToken,
   tokenObj.result.refreshToken
  );
  return tokenObj.result;
 } catch (error) {
  return error;
 }
};
