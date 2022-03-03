import { useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteAsyncPost, fetchAsyncPosts } from "../../redux/actions"

function UserPage() {
  useEffect(() => {
    window.document.title = " Video của Bạn"
    dispatch(fetchAsyncPosts())
  }, [])
  const posts = useSelector((s) => s.allPosts.data)
  const dispatch = useDispatch()

  const onSubmit = useCallback(
    (id) => {
      dispatch(deleteAsyncPost({ id: id }))
    },
    [dispatch]
  )
  return (
    <div
      style={{
        marginTop: "62px",
      }}
    >
      {posts.map((post) => {
        return (
          <div
            key={post._id}
            style={{
              display: "flex",
            }}
          >
            <h1>{post && post.author.name}</h1>
            <h4>{post.author.subName}</h4>
            <button
              onClick={(e) => {
                e.preventDefault()
                return onSubmit(post._id)
              }}
            >
              &times;
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default UserPage
