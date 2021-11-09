var express = require('express');
var router = express.Router();

const BookApiCtrl = require('../controllers/books');

const mongoose = require('mongoose');
const Book = mongoose.model('Book');

  /* display collection data at localhost:3000/api/allbookdata */
router.get('/allBookData',function(req,res){ 
  BookApiCtrl.getBookList(req,res);
});

router.get('/books/:bookid',function(req,res){
  BookApiCtrl.bookReadOne(req,res);
});

module.exports = router;