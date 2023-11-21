import book from "../models/book.js"

class BookController {
  static async showBooks(req, res) {
    const books = await book.find({})
    res.status(200).json(books)
  }

  static async registerBook(req, res) {
    try {
      const newBook = await book.create(req.body)
      res.status(201).json({
        message: "Book created successfully",
        book: newBook,
      })
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - failed to register book`
      })
    }
  }
}

export default BookController
