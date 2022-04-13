const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorName: String, 
    year: Number,
    prices: {
        indianPrice: String,
        dollarPrice: String,
    },
    totalPages: Number,
    stockAvailable: Boolean
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
