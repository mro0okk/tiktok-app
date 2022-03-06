import React from "react"
import { useDispatch } from "react-redux"
function LoginUser() {
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.prevendefault()
  }
  return (
    <div>
      <form className="login-user" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">Email</label>
        <input type="email" className="" id="email" />
        <label htmlFor="password">Password</label>

        <input type="password" className="" id="password" autoComplete="off" />
        <button>Đăng nhập</button>
      </form>
    </div>
  )
}

export default LoginUser
