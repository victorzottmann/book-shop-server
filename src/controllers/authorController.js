import { author } from "../models/author.js";

class AuthorController {
  static async getAuthors(req, res) {
    try {
      const authors = await author.find({});
      res.status(200).json(authors);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getAuthorById(req, res) {
    try {
      const id = req.params.id;
      const foundAuthor = await author.findById(id);
      res.status(200).json(foundAuthor);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async addAuthor(req, res) {
    try {
      const newAuthor = await author.create(req.body);
      res.status(201).json({
        message: "author created",
        author: newAuthor,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async updatedAuthor(req, res) {
    try {
      const id = req.params.id;
      const updatedAuthor = await author.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json({
        message: "author updated",
        author: updatedAuthor,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async deleteAuthor(req, res) {
    try {
      const id = req.params.id;
      const deletedAuthor = await author.findByIdAndDelete(id);
      res.status(200).json({
        message: "author deleted",
        author: deletedAuthor,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default AuthorController;
