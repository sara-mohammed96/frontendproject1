import { httpRequest } from '../../common/apiServer';

export const addComment = (applicationId, commentBody, positionId) => {
 const commentData = {
  body: commentBody,
  applicationId,
  positionId,
 };
 return httpRequest('comments', commentData, 'POST');
};

export const getAllPreviousComments = async () => {
 const res = await httpRequest('comments', {}, 'GET');
 return res.result.list;
};

export const getCommentsByApplicationId = async (applicationId) => {
 const query = { applicationId };
 const res = await httpRequest('comments', {}, 'GET', true, query);
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
