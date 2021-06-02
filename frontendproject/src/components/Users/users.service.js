import request from "../../common/apiServer"

export const getAllUsers = async () => {
  const res = await request('users')
  return res.result.list
}