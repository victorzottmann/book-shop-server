import express from "express"

import books from "./data.js"

const app = express()

app.get("/", (req, res) => {
  res.status(200).send("Book shop server")
})

app.get("/books", (req, res) => {
  res.status(200).json(books)
})

export default app
