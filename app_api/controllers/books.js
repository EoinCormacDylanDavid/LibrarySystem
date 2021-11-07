const mongoose = require('mongoose');
const Book = mongoose.model('Book');

const BookAppCtrl = require('../../app_server/controllers/books');

const getBookList = function(req,res){
    Book.find({}, function(err,result){
        if(err) {
            console.log(err);
        }else{
            res.json(result);
        }
    });
};


const addBookToCollection = function(req,res) { //working just needs to get data from form now
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
};





module.exports = {
    addBookToCollection,
    getBookList,
    
}