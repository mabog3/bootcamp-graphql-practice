const returnAllBooks = async () => {
    try {
        const books = Book.query()
        return books
    } catch (err) {
        console.log(err)
        throw new Error ('failure at returnAllBooks')
    }
  }
  
const returnBookById = async (id) => {
    try {
        const book = await Book.query().findOne('id', id)
        return book
    } catch (err) {
        console.log(err)
        throw new Error ('failure at returnBookById')
    }
}

const resolver = {
    Query: {
      returnAllBooks,
      returnBookById
    }
}

module.exports = resolver