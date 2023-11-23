import book from "../models/Book.js"
import { author } from "../models/author.js"

class BookController {
  static async getBooks(req, res) {
    try {
      const books = await book.find({})
      res.status(200).json(books)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  static async getBookById(req, res) {
    try {
      const id = req.params.id
      const foundBook = await book.findById(id)
      res.status(200).json(foundBook)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  static async addBook(req, res) {
    const newBook = req.body
    try {
      const foundAuthor = await author.findById(newBook.author)
      // foundAuthor._doc is the raw data of the mongoose object
      // this is useful for creating new objects or performing operations outside of the mongoose context
      const fullBook = {
        ...newBook,
        author: { ...foundAuthor._doc }
      }
      const bookCreated = await book.create(fullBook)
      res.status(201).json({
        message: "book created",
        bookCreated,
      })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  static async updateBook(req, res) {
    try {
      const id = req.params.id
      // { new: true } is needed so that the { book: updatedBook } line shows the updated title on request
      const updatedBook = await book.findByIdAndUpdate(id, req.body, { new: true })
      res.status(200).json({
        message: "book updated",
        book: updatedBook,
      })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  static async deleteBook(req, res) {
    try {
      const id = req.params.id
      const deletedBook = await book.findByIdAndDelete(id)
      res.status(200).json({ 
        message: "book deleted",
        book: deletedBook,
      })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
}

export default BookController
