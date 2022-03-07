import { useEffect, lazy } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPostStart } from "../redux/actions/postActions"
import Slider from "../containers/Slider/Slider"
const ContainerVideo = lazy(() =>
  import("../containers/VideoContainer/ContainerVideo")
)
const SkeletonVideo = lazy(() => import("../components/Skeleton/SkeletonVideo"))

function Homepage({ userInfo }) {
  let posts = undefined
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPostStart())
  }, [dispatch])
  posts = useSelector((s) => s.postlists.posts)

  return (
    <div className="container">
      <Slider />
      <div className="main">
        <div id="wrapper" className="wrapper ">
          {posts ? (
            <ContainerVideo posts={posts} />
          ) : (
            <SkeletonVideo width={692} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Homepage
