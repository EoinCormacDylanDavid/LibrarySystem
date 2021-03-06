const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
  title: {type: String,required: true},
  author: {type: String},
  genre: {type: String},
  rating: {type: Number,'default': 0,min: 0,max: 5},
  status: {type: String}
},{ versionKey: false
});

const Book = mongoose.model('Book',booksSchema);
module.exports = Book