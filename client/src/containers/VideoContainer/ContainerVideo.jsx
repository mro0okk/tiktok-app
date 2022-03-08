import { useRef } from "react"
import clsx from "clsx"
import Video from "../../components/Video/Video"
import style from "./ContainerVideos.module.scss"
import { arrayBufferToBase64 } from "../../utils"
function ContainerVideos({ posts }) {
  const ref = useRef()

  // const handleLikeVideo = () => {
  // setLike(!isLike)
  // }

  return (
    <>
      {posts &&
        posts.map((post) => {
          const image64 = arrayBufferToBase64(post.postUser.avatar.data)
          return (
            <div key={post.id} className={style.itemContainer}>
              <div className={style.videoContainer}>
                <div className={style.TextInfoContainer}>
                  <div className={style.videoAuthor}>
                    <img
                      ref={ref}
                      src={image64}
                      alt={post.name}
                      className={clsx(style.avatar, "none740")}
                    />
                    <h2>
                      <div className={style.videoThumbnail}>
                        <img
                          ref={ref}
                          src={image64}
                          alt={post.name}
                          className={style.avatar}
                        />
                      </div>
                      {post.postUser.usename}
                    </h2>
                    <section>
                      <h5>{post.postUser.name}</h5>
                      <div className={style.videoDes}>
                        {post.description}
                        <b>{post.caption}</b>
                      </div>
                      <div className={style.videoSong}>{post.song}</div>
                    </section>
                    <button className={clsx(style.followBtn, style.btnFollow)}>
                      Follow
                    </button>
                  </div>
                </div>
                <div className={style.videoWrapper}>
                  <div className={style.videoItem}>
                    <Video
                      url={post.url}
                      thumbnail={post.thumbnail}
                      id={post.id}
                    />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
    </>
  )
}

export default ContainerVideos
