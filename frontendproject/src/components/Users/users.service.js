import request from "../../common/apiServer"

export const getAllUsers = async () => {
  const res = await request('users')
  return res.result.list
}
const addUser = async (data) => {
  const res = await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
const editUser = async (data, id) => {
  console.log(data);
  const res = await fetch(`http://localhost:3000/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const postingMethodsMap = {
  add: addUser,
  edit: editUser,
}