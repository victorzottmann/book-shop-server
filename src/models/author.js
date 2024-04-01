import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
  },
  { versionKey: false }
);

/**
 * @param {string} authors - name of the collection created on MongoDB Atlas
 * @param {mongoose.Schema} authorSchema - schema defining the structure of the author
 */
const author = mongoose.model("authors", authorSchema);

export { author, authorSchema };
