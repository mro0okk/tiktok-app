import React, { useState, useRef, useEffect } from "react"
import clsx from "clsx"
import icon from "./icon/video_icon"
import style from "./Video.module.scss"
import Add from "../modal/Add"
import customHook from "../../hook"
function Video({ data, likeCount, videoSite, ...rest }) {
  const { useModal } = customHook
  const [isLike, setLike] = useState(false)
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(false)
  const [isShowing, toggle] = useModal()
  const videoRef = useRef()
  const clientHeight = document.documentElement.clientHeight
  useEffect(() => {
    videoRef.current.volume = 1
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
  }, [playing, rest.id, clientHeight])
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
    <div className={style.videoContainer}>
      <div className={clsx(style.video)}>
        <div
          className={clsx(style.videoItem, { [style.videoItemWid]: videoSite })}
        >
          <video
            className={clsx(style.video__player, "embed-responsive-item")}
            onClick={handleVideoPress}
            ref={videoRef}
            loop
            src={data}
            muted={muted}
            volume="0.5"
          ></video>
          <div
            className={clsx(style.videoPlay)}
            onClick={() => handleVideoPress()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className={clsx(
                "bi bi-play-fill",
                "icon",
                style.videoPlayIconBtn,
                {
                  [style.hide]: playing,
                }
              )}
              viewBox="0 0 16 16"
            >
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className={clsx(
                style.videoPlayIconBtn,
                "icon",
                "bi bi-pause-fill",
                {
                  [style.hide]: !playing,
                }
              )}
              viewBox="0 0 16 16"
            >
              <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
            </svg>
          </div>
          <div className={style.videoSoundIconBtn} onClick={handleMuted}>
            <img
              src={icon[0]}
              alt="soundImg"
              height="32"
              className={clsx(style.videoSoundIcon, {
                [style.hide]: !muted,
              })}
            />
            <img
              src={icon[1]}
              alt="soundImg"
              height="32"
              className={clsx(style.videoSoundIcon, {
                [style.hide]: muted,
              })}
            />
          </div>
        </div>
      </div>
      <div className={style.videoIcon}>
        <div id="like" onClick={handleLikeVideo} className={style.videoIconBtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className={clsx(
              style.icon,
              {
                [style.active]: isLike,
              },
              "bi bi-suit-heart-fill"
            )}
            viewBox="0 0 16 16"
          >
            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
          </svg>
        </div>
        <span>{likeCount} L ikes</span>
        <div className={style.videoIconBtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className={clsx(style.icon, "bi bi-chat-dots-fill")}
            viewBox="0 0 16 16"
          >
            <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>
        </div>
        <span>{likeCount} Comments</span>
        {isShowing && <Add type="share" />}
        <div className={style.videoIconBtn} onClick={toggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className={clsx(style.icon, "bi bi-share-fill")}
            viewBox="0 0 16 16"
          >
            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
          </svg>
        </div>
        <span>{likeCount} Shares</span>
      </div>
    </div>
  )
}

export default Video
