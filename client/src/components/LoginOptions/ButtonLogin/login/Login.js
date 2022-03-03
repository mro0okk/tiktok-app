import ReactDOM from "react-dom"
import { Link } from "react-router-dom"
import style from "./login.module.scss"
import loginOptions from "./loginImg"
import clsx from "clsx"
const Login = ({ isShowing, hide }) => {
  return isShowing
    ? ReactDOM.createPortal(
        <div
          id="loginModal"
          className={clsx(style.loginModal, {
            [style.toggleModal]: isShowing,
          })}
        >
          <div className={style.loginZone}>
            <header>
              <h2>Đăng nhập vào TikTok</h2>
              <button className={style.escapeBtn} onClick={hide}>
                &times;
              </button>
            </header>
            <div className={style.loginOptions}>
              {loginOptions.map((loginOption) => {
                return (
                  <Link key={loginOption.form} to="/login" onClick={hide}>
                    <div className={style.loginOption}>
                      <div className={style.channelItem}>
                        <img
                          src={loginOption.img}
                          style={{ width: "24px", height: "24px" }}
                          alt="img"
                        />
                      </div>

                      <div className={style.channel}>
                        <b>{loginOption.description}</b>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>

            <footer className={style.footerLogin}>
              Bạn không có tài khoản? <b>Đăng ký</b>
            </footer>
          </div>
        </div>,
        document.body
      )
    : null
}

export default Login
