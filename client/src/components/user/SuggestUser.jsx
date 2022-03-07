import { useState, useEffect } from "react"
import clsx from "clsx"
import useModal from "../../hook/useModal"
import ButtonLogin from "../Button/ButtonLogin"
import { Link } from "react-router-dom"

function SuggestUser({ style }) {
  const [showUpload, setShowing] = useModal()
  const [showPopUp, setShowPopUp] = useState(false)
  const headerPopup = (action, elementId) => {
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
    headerPopup("mouseenter", "popup")
  }, [showPopUp])

  useEffect(() => {
    headerPopup("mouseleave", "popup")
  }, [showPopUp])

  return (
    <>
      <div className={style.info}>
        <ButtonLogin className={style.upload} logOps="Tải lên" />
        <ButtonLogin
          className={clsx(style.btn, style.btn__login)}
          logOps="Đăng nhập"
        />
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
    </>
  )
}

export default SuggestUser
