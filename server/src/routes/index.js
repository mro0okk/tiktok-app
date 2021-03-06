import express from "express"
import * as userController from "../controllers/userController.js"
import * as postController from "../controllers/postController.js"
import { upload } from "../multerStorage.js"
import dotenv from "dotenv"
const router = express.Router()
dotenv.config()
const initApiRoutes = (app) => {
  //=======================================================
  /* home handle */
  router.get("/", postController.getPostController)
  router.post('/login', userController.handleLogin)
  //=======================================================
  /* users handle */
  router.get("/users/get-users/:id", userController.getUsersController)
  router.delete('/users/delete-user/:id', userController.deleteUserController)
  router.post("/users/create-user", userController.createUserController)
  router.put("/users/edit-user/:id", userController.editUserController)

  //=======================================================
  /* posts handle */
  router.post("/posts/create-post", upload.single("video"), postController.createPostController)
  router.delete('/posts/delete-post', postController.deletePostController)
  router.put('/posts/edit-post', postController.editPostController)
  //=======================================================
  return app.use("/", router)
}

export default initApiRoutes
