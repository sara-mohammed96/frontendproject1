import { httpRequest } from './apiServer';

export const saveTokensToLocalStorage = (accessToken, refreshToken) => {
 window.localStorage.setItem('token', JSON.stringify(accessToken));
 window.localStorage.setItem('refresh_token', JSON.stringify(refreshToken));
};

export const signin = async (usernameText, password) => {
 const signinRoute = 'auth/signin';
 const requestType = 'POST';
 const isWithHeaders = false;
 let userObj = await httpRequest(
  signinRoute,
  { username: usernameText, password },
  requestType,
  isWithHeaders
 );
 saveTokensToLocalStorage(
  userObj.result.accessToken,
  userObj.result.refreshToken
 );
 const { id, name, username, role } = userObj.result;
 const positionsList = await httpRequest('positions', {}, 'GET', true, {
  userId: userObj.result.id,
 });
 if (positionsList.result.list.length > 0) {
  const position = positionsList.result.list[0];
  return {
   id,
   name,
   username,
   role,
   position,
  };
 }
 return { id, name, username, role };
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
