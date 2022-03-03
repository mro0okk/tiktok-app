import { useState } from "react"
import clsx from "clsx"
import Video from "./Video"
import Add from "../modal/Add"
import style from "./ContainerVideos.module.scss"
import BtnFollow from "../modal/Add/BtnFollow"
function ContainerVideos({ post }) {
  const [isShowing, setIsShowing] = useState()

  const handleShow = () => {
    setIsShowing(true)
  }
  const handleShowOff = () => {
    setIsShowing(false)
  }
  return (
    <>
      <div>
        <div className={clsx(style.itemContainer)}>
          <div
            className={clsx(style.videoThumbnail)}
            onMouseEnter={handleShow}
            onMouseLeave={handleShowOff}
          >
            <img
              src={post.videoInfo.thumb}
              alt="thumb"
              className={style.videoThumbnailItem}
            />
            {isShowing && <Add data={post} type="info" />}
          </div>
          <div className={style.videoContainer}>
            <div className={style.TextInfoContainer}>
              <div className={style.videoAuthor}>
                <h2>
                  <div className="none740">
                    <img
                      src={post.videoInfo.thumb}
                      className={style.avatarAnchor}
                      alt="img"
                    />
                  </div>{" "}
                  {post.author.name}
                </h2>{" "}
                <h5>{post.author.subName}</h5>
                <div className={style.videoDes}>{post.description}</div>
                <div className={style.videoSong}>{post.videoInfo.song}</div>
                <BtnFollow top="28px" right="0" padding="0 10px" />
              </div>
            </div>
            <div className={style.videoWrapper}>
              <div className={style.videoItem}>
                <Video
                  data={post.videoURL}
                  likeCount={post.likeCount}
                  videoSite={post.videoSite}
                  id={post.id}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContainerVideos
