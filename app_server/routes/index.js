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

  BookApiCtrl.addBookToCollection(req,res);
}); 


module.exports = router;
