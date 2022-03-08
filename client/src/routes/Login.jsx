import React, { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { userLogin } from "../redux/actions/userActions"
import "./LivePage.scss"
import { Link } from "react-router-dom"
function LoginUser({ auth }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const [login, setLogin] = useState({
    email: "",
    password: "",
  })
  const handleSubmit = () => {
    dispatch(userLogin(login))
  }
  useEffect(() => {
    if (auth) {
      navigate("/")
    }
  }, [auth])
  return (
    <div className="login-wrapper">
      <div className="login__container w-5">
        <form
          className="login__container--form"
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit(e)
          }}
        >
          <div className="login-info">
            <div className="login__info--form">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                className=""
                id="email"
                value={login.email}
                onChange={(e) => {
                  setLogin({
                    ...login,
                    email: e.target.value,
                  })
                }}
              />
            </div>
          </div>
          <div className="login-info">
            <div className="login__info--form">
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                className=""
                id="password"
                autoComplete="off"
                value={login.password}
                onChange={(e) => {
                  setLogin({
                    ...login,
                    password: e.target.value,
                  })
                }}
              />
            </div>
          </div>
          <button>Đăng nhập</button>
          <Link to="/register">
            <button style={{ backgroundColor: "hsl(100 80% 20%)" }}>
              Đăng ký
            </button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default LoginUser
