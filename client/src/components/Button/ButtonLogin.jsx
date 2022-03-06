import { useEffect } from "react"
import { useState } from "react"
import useModal from "../../hook/useModal"
import Login from "../Modals/LoginModal"
function ButtonLogin({ className, logOps }) {
  const [isShowing, toggle] = useModal()
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
