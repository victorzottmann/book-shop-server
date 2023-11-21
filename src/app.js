import express from "express"

import connectToDb from "./config/database.js"
import routes from "./routes/index.js"

const connection = await connectToDb()

connection.on("error", (error) => {
  console.error("Connection error", error)
})

connection.once("open", () => {
  console.log("Database connection successful");
})

const app = express()
routes(app)

export default app
