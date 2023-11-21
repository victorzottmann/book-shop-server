import book from "../models/book.js"

class BookController {
  static async getBooks(req, res) {
    const books = await book.find({})
    res.status(200).json(books)
  }

  static async getBookById(req, res) {
    try {
      const foundBook = await book.findById(req.params.id)
      res.status(200).json({
        book: foundBook
      })
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - book not found`
      })
    }
  }

  static async registerBook(req, res) {
    try {
      const newBook = await book.create(req.body)
      res.status(201).json({
        message: "book created successfully",
        book: newBook,
      })
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - failed to register book`
      })
    }
  }

  static async updateBook(req, res) {
    try {
      const updatedBook = await book.findByIdAndUpdate(req.params.id, req.body, { new: true })
      
      if (!updatedBook) {
        return res.status(404).json({ message: "book not found"})
      }
      
      res.status(200).json({
        message: "book updated successfully",
        book: updatedBook,
      })
    } catch (error) {
      res.status(500).json({
        message: `${error.message} book cannot be updated`
      })
    }
  }

  static async deleteBook(req, res) {
    try {
      const deletedBook = await book.findByIdAndDelete(req.params.id)

      if (!deletedBook) {
        return res.status(404).json({ message: "book not found"})
      }

      res.status(200).json({ 
        message: "book deleted successfully",
        book: deletedBook
      })
    } catch (error) {
      res.status(500).json({
        message: `${error.message} book cannot be deleted`
      })
    }
  }
}

export default BookController
