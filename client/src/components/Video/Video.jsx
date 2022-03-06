import React, { useState, useRef, useEffect } from "react"
import clsx from "clsx"
import style from "./Video.module.scss"
function Video({ url, thumbnail }) {
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
            ></video>
          </div>
          <img src={thumbnail} alt="video" className={style.videoCover} />
        </div>
      </div>
    </>
  )
}

export default Video
