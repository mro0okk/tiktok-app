import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import cors from "cors"
import initApiRoutes from "./routes"
import connectDB from "./config/connectDB.js"
const app = express()
// const router = express.Router()
dotenv.config()
let port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", `http://localhost:${port}`)
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   )
//   res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type")
//   res.setHeader("Access-Control-Allow-Credentials", true)
// })
initApiRoutes(app)
connectDB()

app.use(express.static(__dirname + '/public'))
app.listen(port, () => {
  console.log(`Backend TIKTOK is running on: ${port} `)
})
