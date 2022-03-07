import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import "./index.css"
import { persistor } from "./redux/store"
import { Provider } from "react-redux"
import store from "./redux/store"
import App from "./App"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App persistor={persistor} />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
