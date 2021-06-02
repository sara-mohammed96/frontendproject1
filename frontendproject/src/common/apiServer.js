const SERVER_URL = 'http://localhost';
const PORT = 3000;

const request = async (route) => {
 const res = await fetch(`${SERVER_URL}:${PORT}/${route}`);
 return res.json();
};

export default request;
