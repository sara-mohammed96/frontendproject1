import axios from 'axios';
import { getToken } from './helpers';

const SERVER_URL = 'http://localhost';
const PORT = 3000;

export const httpRequest = async (
 route,
 data,
 type,
 isWithHeaders = true,
 params
) => {
 let token = '';
 if (isWithHeaders) {
  token = await getToken();
 }
 const request = {
  method: type,
  url: `${SERVER_URL}:${PORT}/${route}`,
 };
 if (type !== 'get') {
  request.data = data;
 }
 if (isWithHeaders) {
  request.headers = {
   ...request.headers,
   Authorization: `Bearer ${token}`,
  };
 }
 if (params) {
  request.params = params;
 }
 const res = await axios(request);

 return res.data;
};

export default httpRequest;
