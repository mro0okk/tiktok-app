import { useState } from "react"
import style from "./Slider.module.scss"
import Add from "../modal/Add"
function SliderTopUser(data) {
  const { data: user } = data
  const [userDes, setUserDes] = useState(false)
  const handleDesOn = () => {
    setUserDes(true)
  }
  function handleDesOff() {
    setUserDes(false)
  }
  return (
    <div
      className={style.user}
      key={user._id}
      onMouseEnter={() => handleDesOn()}
      onMouseLeave={() => handleDesOff()}
    >
      <img src={user.videoInfo.thumb} alt="thumbnail" />
      <span>
        <h3 className={style.none}>{user.author.name}</h3>
        <p className={style.none}>{user.author.subName}</p>
      </span>
      {userDes && <Add data={user} type="info" onSlider={userDes} />}
    </div>
  )
}

export default SliderTopUser
