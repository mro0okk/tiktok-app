import clsx from "clsx"
import style from "./style.module.scss"
function BtnFollow({
  bgColor,
  color,
  height,
  width,
  padding,
  top,
  right,
  left,
  bottom,
}) {
  return (
    <button
      className={clsx(style.followBtn)}
      style={{
        backgroundColor: bgColor,
        color,
        height,
        width,
        padding,
        top,
        right,
        left,
        bottom,
      }}
    >
      Follow
    </button>
  )
}

export default BtnFollow
