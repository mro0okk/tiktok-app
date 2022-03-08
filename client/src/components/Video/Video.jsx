import React, { useState, useEffect, useRef, useMemo } from "react"
import clsx from "clsx"
import style from "./Video.module.scss"
import { arrayBufferToBase64 } from "../../utils"
function Video({ url, thumbnail, id }, ref) {
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(false)
  const coverRef = useRef()
  const videoRef = useRef()
  const clientHeight = document.documentElement.clientHeight
  useEffect(() => {
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
        videoRef.current.volume = 0.5

        videoRef.current && setPlaying(true)

        videoRef.current && videoRef.current.play()
      } else {
        videoRef.current && videoRef.current.pause()
        videoRef.current && setPlaying(false)
      }
    }
    setTimeout(() => {
      window.addEventListener("scroll", scroll)
    }, 3000)
    return () => window.removeEventListener("scroll", scroll)
  }, [playing, clientHeight, id])

  useEffect(() => {
    if (coverRef.current && playing) {
      coverRef.current.style.display = `none`
    }
  }, [playing, coverRef.current])
  const handleMuted = () => {
    setMuted(!muted)
  }

  const handleVideoPress = () => {
    return !playing
      ? (videoRef.current.play(), setPlaying(true))
      : (videoRef.current.pause(), setPlaying(false))
  }
  const cover = arrayBufferToBase64(thumbnail)
  return (
    <>
      <div className={style.videoContainer}>
        <div className={clsx(style.video)}>
          <div className={clsx(style.videoItem)}>
            <video
              src={url}
              className={clsx(style.video__player, "embed-responsive-item")}
              ref={videoRef}
              muted
              onClick={handleVideoPress}
            ></video>
          </div>
          <div
            className={style.videoCover}
            ref={coverRef}
            style={{ background: `url(${cover} )` }}
            onClick={handleVideoPress}
          ></div>
        </div>
      </div>
    </>
  )
}

export default React.memo(Video)
