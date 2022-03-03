import { useEffect, useState } from "react"
import useModal from "../../../hook/useModal"
import Login from "./login/Login"
function ButtonLogin({ className }) {
  const [isShowing, toggle] = useModal()
  const [logOps, setLopOps] = useState("Đăng Nhập")
  useEffect(() => {
    if (window.location.href === "http://localhost:3000/login") {
      setLopOps("Đăng Ký")
    }
  }, [logOps])
  return (
    <>
      <button onClick={toggle} className={className}>
        {logOps}
      </button>
      <Login isShowing={isShowing} hide={toggle} />
    </>
  )
}

export default ButtonLogin
