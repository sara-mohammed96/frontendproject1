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
export const getApplications = async () => {
    const res = await request('applications');
    return res.result.list;
};

