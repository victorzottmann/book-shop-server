import express from "express"

import books from "./data.js"
import { getBook } from "./utils/helpers.js"

const app = express()

/**
 * express.json() is a middleware built into express used to parse requests with JSON payloads.
 * When a request is sent by the client, it'll parse the JSON data and make it available
 * in the req.body property of the requested object.
 * 
 * For example, given this book:
 * {
 *    "id": 3,
 *    "title": "The Silmarilion"
 * }
 * 
 * The id can be accessed in req.body.id
 * The title can be accessed in req.body.title
 * 
 * Finally, app.use() mounts middleware functions, which are functions that have access to
 * the request and response objects, req and res. Since express.json() is a global middleware,
 * it'll be applied to all routes after the app.use() statement below.
 */
app.use(express.json())


app.get("/", (req, res) => {
  res.status(200).send("Book shop server")
})

app.get("/books", (req, res) => {
  res.status(200).json(books)
})

// The colon before id indicates that the value is a variable and can change,
// meaning that id is a dynamic part of the route and it'll be different for each request
app.get("/books/:id", (req, res) => {
  const index = getBooks(req.params.id)
  res.status(200).json(books[index])
})

app.post("/books", (req, res) => {
  books.push(req.body)
  res.status(201).send(`Book ${req.body.title} added successfully`)
})

app.put("/books/:id", (req, res) => {
  const index = getBook(req.params.id)
  books[index].title = req.body.title
  res.status(200).json(books)
})

app.delete("/books/:id", (req, res) => {
  const index = getBook(req.params.id)
  books.splice(index, 1)
  res.status(200).json(books)
})

export default app
