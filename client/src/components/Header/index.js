import clsx from "clsx"
import React, { useEffect, useState } from "react"
import style from "./Header.module.scss"
import img from "./img/logo.jpg"
import UploadModal from "../modal/Add/upload/UploadModal"
import useModal from "../../hook/useModal"
import useFakeSyncronousState from "../../hook/useFakeSyncronousState"
import ButtonLogin from "../LoginOptions/ButtonLogin"
import { useDispatch, useSelector } from "react-redux"
import { findAsyncPostsByName } from "../../redux/actions"
function Header() {
  const [showUpload, setShowing] = useModal()
  const [showPopUp, setShowPopUp] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const data = useSelector((s) => s.allPosts.data)
  let dispatch = useDispatch()
  const headerSideEffect = (action, elementId) => {
    if (document.getElementById(elementId) !== null) {
      const handleShow = () => {
        setShowPopUp(
          (action === "mouseenter" && true) ||
            (action === "mouseleave" && false)
        )
      }
      document.getElementById(elementId).addEventListener(action, handleShow)
      return () => {
        document
          .getElementById(elementId)
          .removeEventListener(action, handleShow)
      }
    }
  }
  useEffect(() => {
    headerSideEffect("mouseenter", "popup")
  }, [showPopUp])

  useEffect(() => {
    headerSideEffect("mouseleave", "popup")
  }, [showPopUp])
  const keys = useFakeSyncronousState({})
  const findPosts = (query) => {
    console.log(keys.setState({ name: query }))
    dispatch(findAsyncPostsByName(keys.setState({ name: query })))
  }
  return (
    <div className={style.header}>
      <div className={style.headerFluid}>
        <a
          href="http://localhost:3000/"
          style={{
            alignSelf: "center",
          }}
        >
          <img className={style.logo} src={img} alt="tiktok" />
        </a>
        <div className={style.search}>
          <input
            className={style.searchBar}
            type="text"
            placeholder="Tìm kiếm tài khoản và video"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className={style.splitter}></span>
          <button
            className={style.btn__search}
            onClick={(e) => {
              e.stopPropagation()
              e.persist()
              findPosts(searchQuery)
            }}
          >
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
        <div className={style.info}>
          <button className={style.upload} onClick={() => setShowing()}>
            Upload
          </button>

          <UploadModal isShowing={showUpload} hide={setShowing} />
          <ButtonLogin className={clsx(style.btn, style.btn__login)} />
          <div id="popup" className={style.upload}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-three-dots-vertical"
              viewBox="0 0 16 16"
            >
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
            {showPopUp && (
              <ul className={style.popup}>
                <li>
                  <a href="https://www.google.com/search?q=h%E1%BB%8Dc+ti%E1%BA%BFng+anh&sxsrf=AOaemvI5vMCWk932dUz-hLEDkFJPNGUtFA%3A1639733054285&source=hp&ei=Ple8YcPwDsjw-Qaq3qYY&iflsig=ALs-wAMAAAAAYbxlTquozMcOTt5mjfX3RrTC-YzmOEKp&ved=0ahUKEwjDh-bRwer0AhVIeN4KHSqvCQMQ4dUDCAc&uact=5&oq=h%E1%BB%8Dc+ti%E1%BA%BFng+anh&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAEIAEELEDMgQIABBDMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgjEOoCECc6BAgjECc6CwguEIAEELEDEIMBOgUILhCABDoGCCMQJxATOgcIABCxAxBDOgQILhBDOgcIABCABBAKOgcILhCxAxBDOgoILhDHARCvARBDOgsIABCABBCxAxCDAToICAAQgAQQiwNQ1wVY-ihg6ytoEHAAeASAAYYBiAG-E5IBBDcuMTaYAQCgAQGwAQq4AQI&sclient=gws-wiz">
                    English
                  </a>
                </li>
                <li>Feedback and Help</li>
                <li>Keyboard and shortcut</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
