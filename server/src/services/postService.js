import db from "../models"
import dotenv from "dotenv"
dotenv.config()
//=======================================================
/*
errCode:0, => mess: success!
errCode:1 => errMess: something... not Found ?
errCode:2 => errMess:"missing parameter!"
errCode:3 => errMess: something... suggest is empty
errCode:4 => system error !

*/


//=======================================================

export const getPosts = async (postId) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (postId && postId === "ALL") {
        const posts = await db.Posts.findAll({
          attributes: {
            exclude: ["createdAt", "updatedAt"]
          },
          include: [{
            model: db.User, as: "postUser",
            attributes: {
              exclude: [
                "id",
                "password", "phoneNumber",
                "address", "email",
                "createdAt", "updatedAt"
              ]
            }
          }],
          raw: true,
          nest: true
        })
        if (!posts) {
          resolve({
            errCode: 3,
            errMessage: `post suggest is empty !`,
          })
        } else {
          resolve({
            errCode: 0,
            posts: posts,
            message: "get Posts Done!",
          })
        }
      } if (postId && postId !== "ALL") {
        const post = await db.User.findOne({
          attributes: {
            exclude: [
              "password", "phoneNumber",
              "address", "email",
              "createdAt", "updatedAt"
            ]
          },
          include: [{
            model: db.Posts, as: "UserPost",
            attributes: { exclude: ["createdAt", "updatedAt"] }
          }],
          raw: true,
          nest: true
        })
        if (!post) {
          resolve({
            errCode: 1,
            errMessage: `post was not found !`,
          })
        } else {
          resolve({
            errCode: 0,
            post: post,
            message: "get Post Done!",
          })
        }
      }

    } catch (e) {
      reject({
        errCode: 4,
        errMessage: `system error : ${e}`,
      })
    }
  })
}
//=======================================================
//without handle upload file (with multer)
export const createPost = async (data, path) => {
  const domain = process.env.DOMAIN || "http://localhost:5080"
  return new Promise(async (resolve, reject) => {
    try {
      await db.Posts.create({
        userId: data.userId,
        caption: data.caption,
        description: data.description,
        song: data.song,
        thumbnail: data.thumbnail,
        url: `${domain}/public/videos/${path}`,
      })

      resolve({
        errCode: 0,
        message: "create post success!",
      })
    } catch (e) {
      reject({
        errCode: 1,
        errMessage: `Lỗi lè lè : ${e}`,
      })
    }
  })
}
//=======================================================

export const deletePost = async (postId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const post = await db.Posts.findOne({
        where: { id: postId },
        raw: false,
      })
      if (!post) {
        resolve({
          errCode: 1,
          errMessage: `Post with id = ${postId} doesn't exist!`
        })
      } if (post) {
        await post.destroy()
        resolve({
          errCode: 0,
          message: `delete Post with id = ${postId} success!`
        })
      }
    } catch (e) {
      reject({
        errCode: 4,
        errMessage: `system error : ${e}`,
      })
    }
  })
};
//=======================================================
export const editPost = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 2,
          errMessage: "missing parameter!"
        })
      } if (data.id) {
        const post = await db.Posts.findOne({
          where: { id: data.id },
          attributes: {
            exclude: [
              "userId", "updateAt"
            ],
          },
          raw: false,
        })
        await post.set(data)
        await post.save()
      } else {
        resolve({
          errCode: 4,
          errMessage: "system Error!"
        })
      }

      resolve({
        errCode: 0,
        message: `post was change!`
      })
    } catch (e) {
      reject({
        errCode: 4,
        errMessage: `system error : ${e}`,
      })
    }
  })
};
