import * as userService from "../services/userService"
/*
errCode:0, => mess: success!
errCode:1 => errMess: something... not Found ?
errCode:2 => errMess:"missing parameter!"
errCode:3 => errMess: something... suggest is empty
errCode:4 => system error !

*/
//===========================================================

//===========================================================
export const createUserController = async (req, res) => {

  if (!req.body) {
    return res.status(204).json({
      errCode: 2,
      errMessage: "Missing parameter!"
    })
  } else {
    const message = await userService.createUser(req.body)
    return res.status(200).json(message)
  }
}
//===========================================================

export const getUsersController = async (req, res) => {
  if (!req.params.id) {
    return res.status(404).json({
      errCode: 2,
      errMessage: " Chưa nhập kìa!"
    })
  } else {
    const message = await userService.getAllUsers(req.params.id)
    return res.status(200).json(message)
  }
}
//===========================================================

export const handleLogin = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(204).json({
      errCode: 2,
      errMessage: "Missing parameter!"
    })
  } else {
    const email = req.body.email
    const password = req.body.password
    const userData = await userService.handleUserLogin(email, password)
    return res.status(200).json({
      errCode: userData.errCode,
      message: userData.errMessage,
      userInfo: userData.userInfo ? userData.userInfo : {},
    })
  }

}
//===========================================================
export const deleteUserController = async (req, res) => {
  if (!req.body.id) {
    return res.status(404).json({
      errCode: 2,
      errMessage: " Chưa nhập kìa!"
    })
  } else {
    const data = req.body
    const message = await userService.deleteUser(data.id)
    return res.status(200).json({ mess: 'success' })
  }
};
//===========================================================
export const editUserController = async (req, res) => {
  if (req.body.id) {
    return res.status(404).json({
      errCode: 2,
      errMessage: " Chưa nhập kìa!"
    })
  } else {
    const message = await userService.editUser(req.body)
    return res.status(200).json(message)
  }
};

