import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  title: { type: String, required: true },
  publisher: { type: String },
  price: { type: Number },
  pages: { type: Number },  
}, {versionKey: false })

/**
 * @param {string} books - name of the collection created on MongoDB Atlas
 * @param {mongoose.Schema} bookSchema - schema defining the structure of the book
 */
const book = mongoose.model("books", bookSchema)

export default book