var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const Book = mongoose.model('Book');

const BookApiCtrl = require('../../app_api/controllers/books');
const BookAppCtrl = require('../controllers/books');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
  });

/* display collection data */
router.get('/allBookData',function(req,res){
  BookApiCtrl.getBookList(req,res);
});

/* display admin addbook page */
router.get('/admin/addbook',function(req,res){
  BookAppCtrl.displayAdminAddBook(req,res);
});

/* Enter new book to Database */
router.post('/admin/addbook', function(req,res,next) {
  var newBook = Book({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    rating: req.body.rating,
    status: req.body.status
  });
  console.log(newBook);
  newBook.save(function(err){
    if(err) throw err;

    console.log('Book added');
  })
  BookAppCtrl.displayAdminAddBook(req,res);
}); 


module.exports = router;
