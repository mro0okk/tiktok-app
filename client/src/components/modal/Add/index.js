import clsx from "clsx"
import style from "./style.module.scss"
function Add({ data, type, onSlider }) {
  return type === "info" ? (
    <div
      className={clsx(style.box, style.bottom, {
        [style.slider]: onSlider,
      })}
    >
      <div className={clsx(style.textInfoContainer)}>
        <img
          src={data.videoInfo.thumb}
          alt="thumbnail"
          className={clsx(style.avatarAnchor, style.block)}
        />
        <div className={style.follow}>Follow</div>
        <div className={style.videoAuthor}>
          <h2>
            <div></div> {data.author.name}
          </h2>
          <h5>{data.author.subName}</h5>
          <b>{data.videoInfo.song}</b>
        </div>
        <div className={style.text}>
          <p>
            100k <i>Follower</i>
          </p>
          <p>
            100k <i>Comment</i>
          </p>
          <p>
            100k <i>Share</i>
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className={clsx(style.box, style.top)}>
      <div className={clsx(style.text2)}>
        <h3>Nhúng</h3>
      </div>
      <div className={clsx(style.text2)}>
        <h3>Chia sẻ với Twitter</h3>
      </div>
      <div className={clsx(style.text2)}>
        <h3>Chia sẻ với FaceBook</h3>
      </div>
      <div className={clsx(style.text2)}>
        <h3>Chia sẻ với WhatsApp</h3>
      </div>
      <div className={clsx(style.text2)}>
        <h3>Sao chép liên kết</h3>
      </div>
    </div>
  )
}

export default Add
