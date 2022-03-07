import React, { useImperativeHandle, forwardRef, useRef } from "react"
import clsx from "clsx"
import style from "./Video.module.scss"
function Video({ url, thumbnail }, ref) {
  const videoRef = useRef()
  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play()
    },
    pause() {
      videoRef.current.pause()
    },
    getBoundingClientRect() {
      videoRef.current.getBoundingClientRect()
    },
    volume: videoRef.current.volume,
  }))
  return (
    <>
      <div className={style.videoContainer}>
        <div className={clsx(style.video)}>
          <div className={clsx(style.videoItem)}>
            <video
              src={url}
              muted
              controls
              className={clsx(style.video__player, "embed-responsive-item")}
              ref={videoRef}
            ></video>
          </div>
          <img src={thumbnail} alt="video" className={style.videoCover} />
        </div>
      </div>
    </>
  )
}

export default forwardRef(Video)
