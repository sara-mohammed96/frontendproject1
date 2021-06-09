import axios from 'axios';

const SERVER_URL = 'http://localhost';
const PORT = 3000;

const request = async (route) => {
  const res = await fetch(`${SERVER_URL}:${PORT}/${route}`);
  return res.json();
};

export const httpRequest = (route, data, type, isWithHeaders, params) =>
  // TODO remove the promise here
  new Promise((resolve, reject) => {
    let token = '';
    if (isWithHeaders) {
      //  token = await getToken();
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
        'x-access-token': token,
      };
    }
    if (params) {
      request.params = params;
    }
    axios(request)
      .then((res) => {
        return resolve(res.data);
      })
      .catch((err) => {
        return reject(err);
      });
  });

export default request;
