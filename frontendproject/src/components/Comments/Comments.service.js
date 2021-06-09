import { httpRequest } from '../../common/apiServer';

/*const addComments = async (data) => {
    const res = await fetch('http://localhost:3000/positions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return res.json();
};*/
export const getAllPreviousComments = async () => {
 const res = await httpRequest('comments', {}, 'GET');
 return res.result.list;
};
export const getAllUsers = async () => {
 const res = await httpRequest('users', {}, 'GET');
 return res.result.list;
};

export const getApplications = async () => {
 const res = await httpRequest('applications', {}, 'GET');
 return res.result.list;
};
