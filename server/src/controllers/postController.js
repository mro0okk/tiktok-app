import * as postService from "../services/postService"
/*
errCode:0, => mess: success!
errCode:1 => errMess: something... not Found ?
errCode:2 => errMess:"missing parameter!"
errCode:3 => errMess: something... suggest is empty
errCode:4 => system error !

*/

const check = (condition, response) => {
  let isValid = true
  if (!condition || condition === null) {
    return isValid = false
  } else {
    return {
      isValid,
      res: response.status(404).json({
        errCode: 2,
        errMessage: "missing parameter!"
      })
    }
  }
}

export const getPostController = async (req, res) => {
  const postId = req.query || "ALL"
  const data = await postService.getPosts(postId)
  return res.status(200).json(data)
}

//=======================================================

export const createPostController = async (req, res) => {
  const validate = check(req.body)
  if (validate.isValid) {
    const message = await postService.createPost(req.body)
    return res.status(200).json(message)
  }
  else {
    validate.res
  }
}
//=======================================================

export const deletePostController = async (req, res) => {
  const validate = check(req.body.id)
  if (validate.isValid) {
    const message = await postService.deletePost(req.body.id)
    return res.status(200).json(message)
  }
  else {
    validate.res
  }
};
//=======================================================
export const editPostController = async (req, res) => {
  const validate = check(req.body)
  if (validate.isValid) {
    const message = await postService.editPost(req.body)
    return res.status(200).json(message)
  }
  else {
    validate.res
  }
};
