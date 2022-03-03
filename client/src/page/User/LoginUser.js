import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import style from "./LoginUser.module.scss"

function LoginUser() {
  const [info, setInfo] = useState({
    name: "",
    password: "",
  })
  const errRef1 = useRef()
  const errRef2 = useRef()

  const dispatch = useDispatch()
  const handleSubmit = () => {
    if (info.name.length <= 6 || info.name.length === 0) {
      errRef1.current.innerText = "tai khoan toi thieu 6 ky tu"
      errRef1.current.classList.add(`${style.show}`)
      return
    }
    if (info.password.length <= 6 || info.password.length === 0) {
      errRef2.current.innerText = "mat khau toi thieu 6 ky tu"
      errRef2.current.classList.add(`${style.show}`)
      return
    } else {
      console.log("passes")
    }
  }

  const hideClass = () => {
    errRef1.current.classList.remove(`${style.show}`)
    errRef2.current.classList.remove(`${style.show}`)
  }
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.log}>
          <label>Tên Đăng Nhập : </label>
          <input
            className={style.input}
            type="text"
            placeholder="tên đăng nhập..."
            tabIndex={1}
            value={info.name}
            onChange={(e) => {
              hideClass()
              setInfo({
                ...info,
                name: e.target.value,
              })
            }}
            onMouseDown={hideClass}
          />
          <br />
          <span className={style.hide} ref={errRef1}>
            Hãy Nhập tên tài khoản!
          </span>
        </div>

        <div className={style.log}>
          <label>Mật khẩu : </label>
          <input
            className={style.input}
            type="password"
            placeholder="nhập mật khẩu..."
            tabIndex={1}
            value={info.password}
            onChange={(e) => {
              hideClass()
              setInfo({
                ...info,
                password: e.target.value,
              })
            }}
            onMouseDown={hideClass}
          />
          <br />

          <span className={style.hide} ref={errRef2}>
            Hãy Nhập mật khẩu!
          </span>
        </div>

        <button
          className={style.trigger}
          tabIndex={1}
          onClick={(e) => {
            e.preventDefault()
            handleSubmit()
          }}
        >
          Đăng Nhập
        </button>
      </div>
    </div>
  )
}

export default LoginUser
