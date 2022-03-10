import React, { useState, useEffect, useRef, useLayoutEffect } from "react"
import clsx from "clsx"
import style from "./Video.module.scss"
import { arrayBufferToBase64 } from "../../utils"
function Video({ url, thumbnail, id }, props) {
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(props.autoPlay)
  const coverRef = useRef()
  const videoRef = useRef()
  const clientHeight = document.documentElement.clientHeight
  useLayoutEffect(() => {
    const scroll = () => {
      if (
        videoRef.current &&
        Math.abs(
          videoRef.current.getBoundingClientRect().y +
            (videoRef.current.getBoundingClientRect().height * 2) / 3 <
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
    window.addEventListener("scroll", scroll)
    return () => {
      window.removeEventListener("scroll", scroll)
    }
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
    !playing
      ? (videoRef.current.play(), setPlaying(true))
      : (videoRef.current.pause(), setPlaying(false))
  }
  const cover = arrayBufferToBase64(thumbnail)

  useEffect(() => {
    let height = videoRef.current.getBoundingClientRect().height
    let width = videoRef.current.getBoundingClientRect().width
    if (videoRef.current && width < height) {
      console.dir(videoRef.current.classList.add(style.videoWidth))
    }
  }, [])
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
              loop
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
