import { Suspense, lazy } from "react"
import { Routes, Route } from "react-router-dom"
import UploadPage from "./containers/Upload/UploadPage"
import ProtectedRoutes from "./ProtectedRoutes"
import "./App.css"
import Homepage from "./routes/Homepage"
import Header from "./containers/Header/Header"
import FollowPage from "./routes/FollowPage"
import LivePage from "./routes/LivePage"
import { useSelector } from "react-redux"
import Register from "./components/user/Register"
const LoginUser = lazy(() => import("./routes/Login"))
function App({ persistor }) {
  const { isLoggedIn, userInfo } = useSelector((s) => s.user)

  return (
    <Suspense fallback={<div className="lds_dual_ring">Loading...</div>}>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Homepage userInfo={userInfo} auth={isLoggedIn} />}
          />
          <Route path="/Following" element={<FollowPage />} />
          <Route path="/live" element={<LivePage />} />
          <Route path="/register" element={<Register auth={isLoggedIn} />} />
          <Route path="/login" element={<LoginUser auth={isLoggedIn} />} />
          <Route element={<ProtectedRoutes auth={isLoggedIn} />}>
            <Route path="/upload" element={<UploadPage />} />
          </Route>
        </Routes>
      </div>
    </Suspense>
  )
}

export default App
