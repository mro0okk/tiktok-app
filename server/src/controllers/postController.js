import * as postService from "../services/postService"
/*
errCode:0, => mess: success!
errCode:1 => errMess: something... not Found ?
errCode:2 => errMess:"missing parameter!"
errCode:3 => errMess: something... suggest is empty
errCode:4 => system error !

*/



export const getPostController = async (req, res) => {
  const postId = req.params.id || "ALL"
  const data = await postService.getPosts(postId)
  return res.status(200).json(data)
}

//=======================================================

export const createPostController = async (req, res) => {
  try {
    await req.body
    console.log(req.body.userId)
    console.log("============================");
    if (!req.body || req.body === null) {
      return res.status(204).json({
        errCode: 2,
        errMessage: "missing parameter!"
      })
    } else {
      const message = await postService.createPost(req.body, req.file.filename)
      return res.status(200).json(message)
    }
  } catch (err) {
    console.log("err: ", err);
  }

}
//=======================================================

export const deletePostController = async (req, res) => {
  if (!req.params.id || req.params.id === null) {
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
