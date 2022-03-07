import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { getBase64 } from "../../utils"
import { userRegister } from "../../redux/actions/userActions"
import style from "./Register.module.scss"
function Register({ auth }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
  })
  const [file, setFile] = useState(null)
  const [confirm, setConfirm] = useState("")

  useEffect(() => {
    auth ? navigate("/") : null
  }, [auth])
  const transform = async (file) => {
    if (!file) {
      return
    } else {
      await getBase64(file)
        .then((image64) => setFile(image64))
        .catch((err) => console.error(err))
    }
  }
  const handleSubmit = async () => {
    dispatch(
      userRegister({
        ...user,
        avatar: file,
      })
    )
  }
  return (
    <div className={style.register}>
      <div className={style.registerContainer}>
        <h2>Đăng Ký</h2>
        <div className={style.registerSlice}>
          <label htmlFor="">Email :</label>
          <div className={style.wrapperInput}>
            <input
              type="email"
              value={user.email}
              onChange={(e) => {
                setUser({
                  ...user,
                  email: e.target.value,
                })
              }}
            />
          </div>
        </div>
        <div className={style.registerSlice}>
          <label htmlFor="">Họ tên :</label>
          <div className={style.wrapperInput}>
            <input
              type="text"
              value={user.name}
              onChange={(e) => {
                setUser({
                  ...user,
                  name: e.target.value,
                  username: e.target.value,
                })
              }}
            />
          </div>
        </div>
        <div className={style.registerSlice}>
          <label htmlFor="">mật khẩu :</label>
          <div className={style.wrapperInput}>
            <input
              type="password"
              value={user.confirm}
              onChange={(e) => {
                setConfirm(e.target.value)
              }}
            />
          </div>
        </div>
        <div className={style.registerSlice}>
          <label htmlFor="">Nhập lại mật khẩu :</label>
          <div className={style.wrapperInput}>
            <input
              type="password"
              value={user.password}
              onChange={(e) => {
                setUser({
                  ...user,
                  password: e.target.value,
                })
              }}
            />
          </div>
        </div>
        <div className={style.registerSlice}>
          <label htmlFor="">Avatar :</label>
          <div className={(style.wrapperInput, style.inputFile)}>
            <input type="file" onChange={(e) => transform(e.target.files[0])} />
          </div>
        </div>
      </div>
      <button onClick={handleSubmit}>Đăng ký</button>
    </div>
  )
}

export default Register
