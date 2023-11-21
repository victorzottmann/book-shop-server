import express from "express"
import BookController from "../controllers/bookController.js"

const routes = express.Router()
routes.get("/books", BookController.showBooks)
routes.post("/books", BookController.registerBook)

export default routes
