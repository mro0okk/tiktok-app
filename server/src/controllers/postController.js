import * as postService from "../services/postService"
/*
errCode:0, => mess: success!
errCode:1 => errMess: something... not Found ?
errCode:2 => errMess:"missing parameter!"
errCode:3 => errMess: something... suggest is empty
errCode:4 => system error !

*/



export const getPostController = async (req, res) => {
  const postId = req.query || "ALL"
  const data = await postService.getPosts(postId)
  return res.status(200).json(data)
}

//=======================================================

export const createPostController = async (req, res) => {
  if (!req.body || req.body === null) {
    return res.status(204).json({
      errCode: 2,
      errMessage: "missing parameter!"
    })
  } else {
    const message = await postService.createPost(req.body)
    return res.status(200).json(message)
  }
}
//=======================================================

export const deletePostController = async (req, res) => {
  if (!req.body.id || req.body.id === null) {
    return res.status(204).json({
      errCode: 2,
      errMessage: "missing parameter!"
    })
  } else {
    const message = await postService.deletePost(req.body.id)
    return res.status(200).json(message)
  }
};
//=======================================================
export const editPostController = async (req, res) => {
  if (!req.body || req.body === null) {
    return res.status(204).json({
      errCode: 2,
      errMessage: "missing parameter!"
    })
  } else {
    const message = await postService.editPost(req.body)
    return res.status(200).json(message)
  }
};
