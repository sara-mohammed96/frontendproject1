import { httpRequest } from '../../common/apiServer';

export const getAllUsers = async () => {
  try {
    const res = await httpRequest('users', {}, 'GET');
    return res.result.list;
  } catch (error) {
    console.error(error)
  }
};

const addUser = async (data) => {
 return httpRequest('users', data, 'POST');
};

const editUser = async (data, id) => {
 return httpRequest(`users/${id}`, data, 'PATCH');
};

export const postingMethodsMap = {
 add: addUser,
 edit: editUser,
};
