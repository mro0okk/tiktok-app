import { useState } from "react"
import clsx from "clsx"
import Video from "../../components/Video/Video"
import style from "./ContainerVideos.module.scss"
function ContainerVideos({ posts }) {
  console.log(posts)
  return (
    <>
      {posts &&
        posts.map((post) => (
          <div key={post.id} className={style.itemContainer}>
            <div className={style.videoContainer}>
              <div className={style.TextInfoContainer}>
                <div className={style.videoAuthor}>
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
                  <Video url={post.url} thumbnail={post.thumbnail} />
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  )
}

export default ContainerVideos
