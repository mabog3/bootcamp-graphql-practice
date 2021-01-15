const Author = require('../../models/Author')

const returnAllAuth = async () => {
  try {
    const authors = await Author.query()
    return authors
  } catch (err) {
    console.log(err)
    throw new Error('Failure at returnAllAuth')
  }
}

const returnAuthById = async (_obj, {id}, context) => {
  try {
    const author = await Author.query().findOne('id', id)
    return author
  } catch (err) {
    console.log(err)
    throw new Error('authorById: failure')
  }
}

const resolver = {
  Query: {
    returnAllAuth, 
    returnAuthById,
  }
}

module.exports = resolver