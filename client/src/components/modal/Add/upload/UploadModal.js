import ReactDOM from "react-dom"
import { useState, useCallback } from "react"
import { useDispatch } from "react-redux"
import FireBase64 from "react-file-base64"
import clsx from "clsx"
import { createAsyncPost } from "../../../../redux/actions"
import style from "./uploadModal.module.scss"
const UploadModal = (props) => {
  const { isShowing, hide } = props
  const [post, setPost] = useState({
    videoSite: false,
    description: "#Ssst #TieuHy #Tiktokdancevn heyy menn😜😜",
    author: {
      name: "tiểu hý",
      subName: "🎀 Tiểu Hý 🎀",
    },
    videoURL: "http://127.0.0.1:5500/tiktok_client/clip/kor.mp4",
    videoInfo: {
      song: "Ái Nộ (Remix) - Masew, Khôi Vũ",
      thumbnail: "http://127.0.0.1:5500/tiktok_client/clip/thumbnail_a.jpeg",
      thumb: "http://127.0.0.1:5500/tiktok_client/clip/thumb2.jpeg",
    },
    likeCount: 0,
  })
  const dispatch = useDispatch()
  const onSubmit = useCallback(() => {
    dispatch(createAsyncPost(post))
  }, [post, dispatch])
  return isShowing
    ? ReactDOM.createPortal(
        <div
          id="UploadModal"
          className={clsx(style.loginModal, {
            [style.toggleModal]: isShowing,
          })}
        >
          <div className={style.loginZone}>
            <header>
              <h2>Tải lên Video của Bạn</h2>
              <button className={style.escapeBtn} onClick={hide}>
                &times;
              </button>
            </header>

            <div className={style.upload}>
              <div>
                <div className={style.uploadInfo}>
                  Nhập tên Tài khoản:{" "}
                  <input
                    className={style.uploadInput}
                    value={post.author.name}
                    type="text"
                    placeholder="Nhập tên hiển thị..."
                    onChange={(e) =>
                      setPost({
                        ...post,
                        author: { ...post.author, name: e.target.value },
                      })
                    }
                  />{" "}
                </div>
                <div className={style.uploadInfo}>
                  Tên hiển thị:
                  <input
                    className={style.uploadInput}
                    value={post.author.subName}
                    type="text"
                    placeholder="Alias..."
                    onChange={(e) =>
                      setPost({
                        ...post,
                        author: { ...post.author, subName: e.target.value },
                      })
                    }
                  />{" "}
                </div>
                <div className={style.uploadInfo}>
                  Mô Tả:{" "}
                  <input
                    className={style.uploadInput}
                    value={post.description}
                    type="text"
                    placeholder="description..."
                    onChange={(e) =>
                      setPost({
                        ...post,
                        description: e.target.value,
                      })
                    }
                  />
                </div>
                <div className={style.uploadInfo}>
                  Nhạc nền:{" "}
                  <input
                    className={style.uploadInput}
                    value={post.videoInfo.song}
                    type="text"
                    placeholder="song..."
                    onChange={(e) =>
                      setPost({
                        ...post,
                        videoInfo: { ...post.videoInfo, song: e.target.value },
                      })
                    }
                  />
                </div>
                <div className={style.uploadInfo}>
                  Avatar:
                  <input
                    className={style.uploadInput}
                    type="text"
                    value={post.videoInfo.thumb}
                    placeholder="Nhập đường dẫn ảnh của Bạn ..."
                    onChange={(e) =>
                      setPost({
                        ...post,
                        videoInfo: {
                          ...post.videoInfo,
                          thumb: e.target.value,
                        },
                      })
                    }
                  />{" "}
                </div>
                <div className={style.uploadInfo}>
                  Hoặc tải lên
                  <FireBase64
                    accept="*"
                    type="file"
                    value={post.videoInfo.thumb}
                    onDone={({ base64 }) =>
                      setPost({
                        ...post,
                        videoInfo: {
                          ...post.videoInfo,
                          thumb: base64,
                        },
                      })
                    }
                  />
                </div>
              </div>
              <div className={style.uploadInfo}>
                Splash art:
                <input
                  className={style.uploadInput}
                  type="text"
                  value={post.videoInfo.thumbnail}
                  placeholder="Nhập đường dẫn ảnh của Bạn ..."
                  onChange={(e) =>
                    setPost({
                      ...post,
                      videoInfo: {
                        ...post.videoInfo,
                        thumbnail: e.target.value,
                      },
                    })
                  }
                />{" "}
              </div>
              <div className={style.uploadInfo}>
                Hoặc tải lên
                <FireBase64
                  accept="*"
                  type="file"
                  value={post.videoInfo.thumbnail}
                  onDone={({ base64 }) =>
                    setPost({
                      ...post,
                      videoInfo: {
                        ...post.videoInfo,
                        thumbnail: base64,
                      },
                    })
                  }
                />
              </div>

              <div className={style.uploadInfo}>
                <span>Video của bạn: </span>
                <input
                  className={style.uploadInput}
                  type="text"
                  value={post.videoURL}
                  placeholder="Nhập đường dẫn video của Bạn ..."
                  onChange={(e) =>
                    setPost({
                      ...post,
                      videoURL: e.target.value,
                    })
                  }
                />
              </div>
              <div className={style.uploadInfo}>
                Hoặc tải lên
                <FireBase64
                  accept="*"
                  type="file"
                  value={post.videoURL}
                  onDone={({ base64 }) =>
                    setPost({ ...post, videoURL: base64 })
                  }
                />
              </div>
              <button
                className={style.uploadBtn}
                onClick={() => {
                  hide()
                  onSubmit()
                }}
              >
                Create
              </button>
            </div>

            <footer className={style.footerLogin}>
              TikTip? <b>Nhấn tổ hợp win+ . để sử dụng Emoji 👀 </b>
            </footer>
          </div>
        </div>,
        document.body
      )
    : null
}

export default UploadModal
