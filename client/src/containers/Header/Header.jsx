import { useState } from "react"
import clsx from "clsx"
import style from "./Header.module.scss"
import img from "../../public/img/logo.jpg"
import UnAuthUser from "../../components/user/UnAuthUser"
import UserInfo from "../../components/user/UserInfo"
import { useSelector } from "react-redux"
function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const { isLoggedIn, userInfo } = useSelector((s) => s.user)
  return (
    <div className={style.header}>
      <div className={style.headerFluid}>
        <a
          href="http://localhost:3000/"
          style={{
            alignSelf: "center",
          }}
        >
          <div className={style.logo}>
            <img className={style.logoImg} src={img} alt="tiktok" />
          </div>
        </a>
        <div className={style.search}>
          <input
            className={style.searchBar}
            type="text"
            placeholder="Tìm kiếm tài khoản và video"
          />
          <span className={style.splitter}></span>
          <button className={style.btn__search}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className={clsx(style.icon, "bi bi-search")}
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
        {isLoggedIn ? (
          <UserInfo data={userInfo} style={style} />
        ) : (
          <UnAuthUser style={style} />
        )}
      </div>
    </div>
  )
}

export default Header
