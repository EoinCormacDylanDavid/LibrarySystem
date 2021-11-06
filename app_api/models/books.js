const { mongo } = require('mongoose');
const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: String,
  genre: String,
  rating: {
    type: Number,
    'default': 0,
    min: 0,
    max: 5
  },
  status: String
});

mongoose.model('Book',booksSchema);