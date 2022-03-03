import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import clsx from "clsx"

import BtnFollow from "../../components/modal/Add/BtnFollow"
import Slider from "../../components/Slider/Slider"
import { fetchAsyncPosts } from "../../redux/actions"
import style from "./followPage.module.scss"
function FollowPage() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAsyncPosts())
  }, [])
  const posts = useSelector((state) => state.allPosts.data)
  return (
    <div>
      <div className="container">
        <div className={style.followPage}>
          <Slider data={posts} />
          <div
            id="followPageContent"
            className={clsx(style.followContainer, "followPageContent")}
          >
            <div className={style.videoNews}>
              {posts.map((post) => {
                return (
                  <div
                    className={style.videoItems}
                    key={post._id}
                    style={{
                      background: `url(${post.videoInfo.thumbnail}) no-repeat center `,
                      backgroundSize: "100%",
                    }}
                  >
                    <div className={style.videoItemsModal}>
                      <img
                        className={style.thumbnail}
                        src={post.videoInfo.thumb}
                        alt="thumbnail"
                      />
                      <div className={style.userInfo}>
                        <h3>{post.author.name}</h3>
                        <h4>{post.author.subName}</h4>
                      </div>
                      <BtnFollow
                        width="60%"
                        bgColor="#fe2c55"
                        color="white"
                        padding=".5rem"
                        bottom="2rem"
                        left="3.5rem"
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FollowPage
