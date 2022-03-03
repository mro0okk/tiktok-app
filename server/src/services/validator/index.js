import db from "../../models"
import bcryptjs from 'bcryptjs'
const salt = bcryptjs.genSaltSync(10)
//check Email users post

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
export const checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findOne({
        where: { email: userEmail },
      })
      if (user) {
        resolve(true)
      } else {
        resolve(false)
      }
    } catch (e) {
      reject(e)
    }
  })
}
//create User
export const hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashUserPassword = bcryptjs.hashSync(password, salt)
      resolve(hashUserPassword)
    } catch (e) {
      reject(e)
    }
  })
}
