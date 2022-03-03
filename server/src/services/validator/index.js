import db from "../../models"
import bcryptjs from 'bcryptjs'
const salt = bcryptjs.genSaltSync(10)
//check Email users post
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
