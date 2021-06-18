import { httpRequest } from '../../common/apiServer';

export const getAllPositions = async () => {
    const res = await httpRequest('positions', {}, 'GET');
    return res.result.list;
};

export const getPositionByUserId = async () => {
    const res = await httpRequest('positions', {}, 'GET', true);
    return res.result.list[0];
};

const addPosition = async (data) => {
    return httpRequest('positions', data, 'POST');
};

const editPosition = async (data, positionId) => {
    return httpRequest(`positions/${positionId}`, data, 'PATCH');
};

export const postingMethodsMap = {
    add: addPosition,
    edit: editPosition,
};
