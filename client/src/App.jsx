import { Suspense, lazy } from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Homepage from "./routes/Homepage"
import Header from "./containers/Header/Header"
import FollowPage from "./routes/FollowPage"
import LivePage from "./routes/LivePage"
const LoginUser = lazy(() => import("./routes/Login"))
import UploadPage from "./containers/Upload/UploadPage"
function App() {
  return (
    <Suspense fallback={<div className="lds_dual_ring">Loading...</div>}>
      {/* <GlobalStyle> */}
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Following" element={<FollowPage />} />
          <Route path="/live" element={<LivePage />} />
          {/* <Route path="/user" element={<UserPage />} /> */}
          <Route path="/login" element={<LoginUser />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </div>

      {/* </GlobalStyle> */}
    </Suspense>
  )
}

export default App
