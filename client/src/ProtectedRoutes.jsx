import { Outlet, Navigate } from "react-router-dom"
const ProtectedRoutes = ({ auth }) => {
  console.log(auth)
  return auth ? <Outlet /> : <Navigate to={"/login"} />
}

export default ProtectedRoutes
