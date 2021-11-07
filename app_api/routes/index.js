var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const Book = mongoose.model('Book');

/* Enter new book to Database */
router.post('/admin/addbook', function(req,res,next) {
    var newBook = Book({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      rating: parseInt(req.body.rating),
      status: req.body.status
    });
    console.log(newBook);
    newBook.save(function(err){
      if(err) throw err;
  
      console.log('Book added');
    })
  
  });