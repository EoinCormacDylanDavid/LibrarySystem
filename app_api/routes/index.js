var express = require('express');
var router = express.Router();

const BookApiCtrl = require('../controllers/books');

const mongoose = require('mongoose');
const Book = mongoose.model('Book');

  /* display collection data at localhost:3000/api/allbookdata */
router.get('/allBookData',function(req,res){ 
  BookApiCtrl.getBookList(req,res);
});

module.exports = router;