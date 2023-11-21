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

// app.get("/", (req, res) => {
//   res.status(200).send("Book shop server")
// })

// The colon before id indicates that the value is a variable and can change,
// meaning that id is a dynamic part of the route and it'll be different for each request
// app.get("/books/:id", (req, res) => {
//   res.status(200).json(book[index])
// })

// app.post("/books", (req, res) => {
//   books.push(req.body)
//   res.status(201).send(`Book ${req.body.title} added successfully`)
// })

// app.put("/books/:id", (req, res) => {
//   const index = getBook(req.params.id)
//   book[index].title = req.body.title
//   res.status(200).json(book)
// })

// app.delete("/books/:id", (req, res) => {
//   const index = getBook(req.params.id)
//   books.splice(index, 1)
//   res.status(200).json(books)
// })

export default app
