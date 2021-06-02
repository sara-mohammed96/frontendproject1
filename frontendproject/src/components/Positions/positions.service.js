import request from '../../common/apiServer';

export const getAllPositions = async () => {
 const res = await request('positions');
 return res.result.list;
};

const addPosition = async (data) => {
 const res = await fetch('http://localhost:3000/positions', {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
 });
 return res.json();
};

const editPosition = async (data, positionId) => {
 console.log(data);
 const res = await fetch(`http://localhost:3000/positions/${positionId}`, {
  method: 'PATCH',
  headers: {
   'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
 });
 return res.json();
};

export const postingMethodsMap = {
 add: addPosition,
 edit: editPosition,
};
