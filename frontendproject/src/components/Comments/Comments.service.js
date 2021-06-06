import request from '../../common/apiServer';


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
    const res = await request('comments');
    return res.result.list;
};
export const getAllUsers = async () => {
    const res = await request('users')
    return res.result.list
}

export const getApplications = async () => {
    const res = await request('applications')
    return res.result.list
}

