import * as userService from "../services/userService"
/*
errCode:0, => mess: success!
errCode:1 => errMess: something... not Found ?
errCode:2 => errMess:"missing parameter!"
errCode:3 => errMess: something... suggest is empty
errCode:4 => system error !

*/
//===========================================================


export const createUserController = async (req, res) => {
  const message = await userService.createUser(req.body)
  if (req.body) {
    return res.status(200).json(message)
  } else {
    return res.status(204).json(message)
  }
}
//===========================================================

export const getUsersController = async (req, res) => {
  const id = req.params.id //ALL or id
  const users = await userService.getAllUsers(id)
  return res.status(200).json({
    errCode: 0,
    errMessage: "No Problems",
    users,
  })
}
//===========================================================

export const handleLogin = async (req, res) => {
  const username = req.body.username
  const password = req.body.password
  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "missing input parameter!",
    })
  }
  const userData = await handleUserLogin(username, password)

  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.errMessage,
    user: userData.user ? userData.user : {},
  })
}
//===========================================================
export const deleteUserController = async (req, res) => {
  const data = req.body
  const message = await userService.deleteUser(data.id)
  console.log(message)
  return res.status(200).json({ mess: 'success' })
};
