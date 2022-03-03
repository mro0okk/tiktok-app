import React from "react"
import { Provider } from "react-redux"
import { Routes, Route } from "react-router-dom"

import "./App.css"
import store from "./redux/store"

import LivePage from "./page/LivePage"
import GlobalStyle from "./components/GlobalStyles"
import Header from "./components/Header"
import FollowPage from "./page/Followpage/FollowPage"
import Homepage from "./page/Home/Homepage"
import UserPage from "./page/User/Userpage"
import LoginUser from "./page/User/LoginUser"

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/FollowPage" element={<FollowPage />} />
          <Route path="/live" element={<LivePage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/login" element={<LoginUser />} />
        </Routes>
      </GlobalStyle>
    </Provider>
  )
}

export default App
