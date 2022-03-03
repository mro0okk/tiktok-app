import db from "../models"
import * as validator from './validator'
import bcryptjs from 'bcryptjs'

/*
errCode:0, => mess: success!
errCode:1 => errMess: something... not Found ?
errCode:2 => errMess:"missing parameter!"
errCode:3 => errMess: something... suggest is empty
errCode:4 => system error !

*/
//=======================================================
//post login user controller
export const handleUserLogin = async (username, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {
        errCode: "",
        errMessage: "no more message",
      }
      const isExist = await validator.checkUserEmail(username)
      if (isExist) {
        let user = await db.User.findOne({
          attributes: ["email", "roleId", "password"],
          where: { username: username },
        })

        if (user) {
          const check = bcryptjs.compareSync(password, user.password)
          delete user.password
          if (check) {
            userData.errCode = 0
            userData.errMessage = "OK"
            userData.user = user
          } else {
            userData.errCode = 3
            userData.errMessage = "Incorrect password !"
          }
        } else {
          userData.errCode = 2
          userData.errMessage = `User not found!`
        }
      } else {
        userData.errCode = 1
        userData.errMessage = `Your username isn't exist in your system! please try other or create a new one!`
      }
      resolve(userData)
    } catch (e) {
      reject(e)
    }
  })
}

//=======================================================
export const getUserById = async (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findOne({ where: { id: userId } })
      const post = await db.Posts.findOne({ where: { userId } })
      if (!user) {
        resolve({
          errCode: 2,
          errMessage: "user not found!",
        })
      } else {
        resolve({
          errCode: 0,
          user: user,
          post,
        })
      }
    } catch (e) {
      reject(e)
    }
  })
}


//=======================================================
//get-users by id or all
export const getAllUsers = (userId) => {
  return new Promise(async (resolve, reject) => {
    let users = {}
    try {
      if (userId && userId === "ALL") {
        users = await db.User.findAll({
          attributes: {
            exclude: ["password"],
          },
        })
      }
      if (userId && userId !== "ALL") {
        users = await db.User.findOne({
          where: { id: userId },
          attributes: {
            exclude: ["password"],
          },
        })
      }
      resolve(users)
    } catch (error) {
      reject(error)
    }
  })
}
//=====================================================

//==================create user =======================
export const createUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      //check email user is exist
      const check = await validator.checkUserEmail(data.email)
      if (check === true) {
        resolve({
          errCode: 1,
          errMessage: `Your email is already in used , please try another name !`,
        })
        return
      } else {
        const hashPasswordFromBcrypt = await validator.hashUserPassword(data.password)
        await db.User.create({
          email: data.email,
          password: hashPasswordFromBcrypt,
          username: data.username,
          name: data.name,
          phoneNumber: data.phoneNumber,
          address: data.address,
          avatar: data.avatar,
          following: data.following || "0",
          follower: data.follower || "0",
          roleId: data.roleId || "3",
        })
      }
      resolve({
        errCode: 0,
        message: "Create user success!",
      })
    } catch (e) {
      reject("this is falure:: ", e)
    }
  })
}
//===========================================================

//delete user with id
export const deleteUser = async (userId) => {
  return new Promise(async (resolve, reject) => {

    try {
      const user = await db.User.findOne({
        where: { id: userId },
        // default config raw is true!
        raw: false,
      })
      const posts = await db.Posts.findAll({
        where: { userId },
        raw: false,
      })
      if (!user) {
        resolve({
          errCode: 2,
          errMessage: `the user isn't exist!`,
        })
      } else {
        await user.destroy()
        await posts.destroy()

        resolve({
          errCode: 0,
          message: `the user is deleted!`,
        })
      }
    } catch (e) {
      reject(e)
    }
  })

}
//===========================================================
