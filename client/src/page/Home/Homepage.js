import Slider from "../../components/Slider/Slider"
import { Link } from "react-router-dom"
import ContainerVideos from "../../components/containers/ContainerVideos"
import Spin from "../../components/modal/spin"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchAsyncPosts } from "../../redux/actions"
function Homepage() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAsyncPosts())
  }, [dispatch])
  const posts = useSelector((state) => state.allPosts.data)
  return (
    <div className="container">
      <Slider data={posts} />
      <div className="main">
        <div id="wrapper" className="wrapper ">
          {posts.length !== 0 ? (
            posts.map((post) => (
              <div key={post._id}>
                <ContainerVideos post={post} />
              </div>
            ))
          ) : (
            <Spin />
          )}
        </div>
      </div>
      <Link
        to="/user"
        style={{
          display: "block",
          position: "fixed",
          bottom: "1rem",
          right: "1rem",
          color: "hsla(22,60%,50%,0.9)",
        }}
      >
        Press Space!
      </Link>
    </div>
  )
}

export default Homepage
