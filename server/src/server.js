import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import cors from "cors"
import initApiRoutes from "./routes"
import connectDB from "./config/connectDB.js"
const app = express()
dotenv.config()
let port = process.env.PORT || 5000
app.use(cors())
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", `http://localhost:${port}`)
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   )
//   res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type")
//   res.setHeader("Access-Control-Allow-Credentials", true)
// })
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }))

app.use('/public', express.static(__dirname + '/public'))
initApiRoutes(app)
connectDB()

app.listen(port, () => {
  console.log(`Backend TIKTOK is running on: ${port} `)
})
