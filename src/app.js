import express from "express"
import books from "./data.js"

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
  res.status(200).send("Book shop server")
})

app.get("/books", (req, res) => {
  res.status(200).json(books)
})

app.post("/books", (req, res) => {
  books.push(req.body)
  res.status(201).send("Book added successfully")
})

export default app
