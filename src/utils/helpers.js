import books from "../data.js"

export function getBook(id) {
  return books.findIndex((book) => {
    // id must be converted to a number for comparison because the URL params are strings
    return book.id === Number(id)
  })
}