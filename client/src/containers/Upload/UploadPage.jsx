import { useState } from "react"
import { getBase64 } from "../../utils"
import { useDispatch, useSelector } from "react-redux"
import "./UploadPage.scss"
import { createPostStart } from "../../redux/actions/postActions"
import { userInfo$ } from "../../redux/selectors"

function UploadPage() {
  const dispatch = useDispatch()
  const { userInfo } = useSelector(userInfo$)
  const code = [
    "MP4 or WebM",
    "720x1280 resolution or higher",
    " Up to 5 minutes",
    "Less than 2 GB ",
  ]
  const postInit = {
    caption: "",
    description: "",
    song: "",
    thumbnail: null,
    userId: userInfo.id,
  }
  const [post, setPost] = useState(postInit)
  const [video, setVideo] = useState(null)
  const transform = async (image) => {
    if (!image) {
      return
    } else {
      await getBase64(image)
        .then((image64) =>
          setPost({
            ...post,
            thumbnail: image64,
          })
        )
        .catch((err) => console.error(err))
    }
  }
  const handleUploadVideo = (video) => {
    video && setVideo(video)
  }
  const handleUploadPost = async (e) => {
    const formData = new FormData()
    formData.append("video", video)
    for (let i = 0; i < Object.keys(post).length; i++) {
      const x = Object.keys(post)[i]
      formData.append(x, post[x])
    }
    dispatch(createPostStart(formData))
  }
  const handleDiscard = () => {
    setImage(null)
    setVideo(null)
    setPost(postInit)
  }
  return (
    <div className="upload">
      <div className="upload__container">
        <div className="upload__container--header">
          <h3>Upload video</h3>
          <div className="subtext">Post a video to your account</div>
        </div>
        <div className="upload__container--body">
          <section className="upload__left w-3 mt-3">
            <input
              type="file"
              id="file"
              onChange={(e) => {
                handleUploadVideo(e.target.files[0])
              }}
            />
            <div className="upload-area">
              <svg
                width="40"
                height="29"
                viewBox="0 0 40 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.5001 29H30.5C35.7467 29 40 24.7467 40 19.5C40 14.7115 36.4571 10.7504 31.8497 10.0951C30.937 4.37297 25.9792 0 20 0C13.3726 0 8 5.37258 8 12L8.00001 12.0145C3.53831 12.2733 0 15.9734 0 20.5C0 25.1944 3.80558 29 8.5 29H18.5001V17.1213L15.9143 19.7071C15.7191 19.9024 15.4025 19.9024 15.2072 19.7071L13.793 18.2929C13.5977 18.0976 13.5977 17.781 13.793 17.5858L18.9395 12.4393C19.5252 11.8536 20.475 11.8536 21.0608 12.4393L26.2072 17.5858C26.4025 17.781 26.4025 18.0976 26.2072 18.2929L24.793 19.7071C24.5977 19.9024 24.2812 19.9024 24.0859 19.7071L21.5001 17.1213V29Z"
                  fill="#161823"
                  fillOpacity="0.34"
                />
              </svg>
              <div className="maintext">Select video to upload</div>
              <div className="subtext mb-1">or drag and drop file</div>
              {code.map((text) => (
                <div className="subtext" key={text}>
                  {text}
                </div>
              ))}
              <label htmlFor="file" className="btn-upload">
                Chọn tệp tin
              </label>
            </div>
          </section>
          <section className="upload__right w-7">
            <label htmlFor="" className="input-target maintext">
              caption
            </label>
            <input
              type="text"
              className="upload__input"
              value={post.caption}
              onChange={(e) => {
                setPost({
                  ...post,

                  caption: e.target.value,
                })
              }}
            />
            <label htmlFor="thumbnail" className="input-target maintext">
              cover
            </label>

            <input
              type="file"
              id="thumbnail"
              className="upload__input"
              onChange={(e) => transform(e.target.files[0])}
            />
            <label htmlFor="" className="input-target maintext">
              description
            </label>
            <input
              type="text"
              className="upload__input"
              value={post.description}
              onChange={(e) => {
                setPost({
                  ...post,
                  description: e.target.value,
                })
              }}
            />
            <label htmlFor="" className="input-target maintext">
              song
            </label>
            <input
              type="text"
              className="upload__input"
              value={post.song}
              onChange={(e) => {
                setPost({
                  ...post,
                  song: e.target.value,
                })
              }}
            />
            <div>
              <button onClick={handleDiscard}>Discard</button>
              <button onClick={handleUploadPost}>Post</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default UploadPage
