var express = require('express');
var router = express.Router();

const BookApiCtrl = require('../../app_api/controllers/books');
const BookCtrl = require('../controllers/books');


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
  res.render('admin-AddBook');
})

module.exports = router;
