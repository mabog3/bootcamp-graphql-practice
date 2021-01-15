const Author = require('../../models/Author')

const addAuthor = async (obj, {
    inp: { firstName, lastName, age, numBooksPublished, email, addressID},
  }) => {
    try {
      const author = await Author.query().insert({
        firstName: firstName, 
        lastName: lastName, 
        age: age, 
        numBooksPublished: numBooksPublished, 
        email: email, 
        addressId: addressID,
      }).returning('*')
      return author
    } 
    
    catch (err) {
        console.log(err)
      throw new Error("Failure at addAuthor")
    }
  }

  const resolver = {
    Mutation: {
        addAuthor
    }
  }

  module.exports = resolver