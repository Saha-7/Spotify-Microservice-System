import express from "express"
import dotenv from "dotenv"
import songRoutes from "./route.js"

dotenv.config()

const app = express()


const port = process.env.PORT

app.use("/api/v1", songRoutes)

app.listen(port,()=>{
    console.log(`song service running on port ${port}`)
})