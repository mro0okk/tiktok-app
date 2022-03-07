import { useState, useRef, useEffect } from "react"
import clsx from "clsx"
import Video from "../../components/Video/Video"
import style from "./ContainerVideos.module.scss"
import { arrayBufferToBase64 } from "../../utils"
function ContainerVideos({ posts }) {
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef()
  const clientHeight = document.documentElement.clientHeight
  useEffect(() => {
    videoRef.current.volume = 0.5
    const scroll = () => {
      if (
        videoRef.current &&
        Math.abs(
          videoRef.current.getBoundingClientRect().y +
            (videoRef.current.getBoundingClientRect().height * 3) / 4 <
            clientHeight
        ) &&
        videoRef.current.getBoundingClientRect().y + 100 > 0
      ) {
        videoRef.current && setPlaying(true)

        videoRef.current && videoRef.current.play()
      } else {
        videoRef.current && videoRef.current.pause()
        videoRef.current && setPlaying(false)
      }
    }
    window.addEventListener("scroll", scroll)
    return () => window.removeEventListener("scroll", scroll)
  }, [playing, clientHeight])
  const handleMuted = () => {
    setMuted(!muted)
  }

  const handleLikeVideo = () => {
    if (isLike === false) {
      return setLike(!isLike)
    } else {
      return setLike(!isLike)
    }
  }

  const handleVideoPress = () => {
    return !playing
      ? (videoRef.current.play(), setPlaying(true))
      : (videoRef.current.pause(), setPlaying(false))
  }

  return (
    <>
      {posts &&
        posts.map((post) => (
          <div key={post.id} className={style.itemContainer}>
            <div className={style.videoContainer}>
              <div className={style.TextInfoContainer}>
                <div className={style.videoAuthor}>
                  <img
                    src={arrayBufferToBase64(post.postUser.avatar.data)}
                    alt={post.name}
                    className={style.avatar}
                  />
                  <h2>
                    <div className="none740"></div>
                    {post.postUser.usename}
                  </h2>
                  <h5>{post.postUser.name}</h5>
                  <div className={style.videoDes}>
                    {post.description}
                    <b>#{post.caption}</b>
                  </div>
                  <div className={style.videoSong}>{post.song}</div>
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
                    ref={videoRef}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  )
}

export default ContainerVideos
