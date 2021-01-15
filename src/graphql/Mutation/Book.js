const Book = require('../../models/Book')

const addBook = async (obj, {
  input: {title, language, numPages, datePublished, bestseller, authorId, publisherId,
  },
    }) => {
    try {
        const book = await Book.query().insert({
            title: title,
            language: language,
            numPages: numPages,
            datePublished: datePublished,
            bestseller: bestseller,
            authorId: authorId,
            publisherId: publisherId,
        }).returning('*')
        return book
        }
        catch (err) {
            console.log(err)
            throw new Error('failure at addBook')
        }
    }

const resolver = {
  Mutation: {
    addBook,
  },
}

module.exports = resolver