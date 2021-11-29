const mongoose = require('mongoose');
const Book = mongoose.model('Book');

const BookAppCtrl = require('../../app_server/controllers/books');

//get book list
const getBookList = function(req,res){
    Book.find({}, function(err,result){
        if(err) {
            console.log(err);
        }else{
            res.json(result);
        }
    });
};

const bookReadOne = function(req,res){
    Book
        .findById(req.params.bookid)
        .exec((err, Book) => {
            if (!Book) {
              res	
                .status(404) 
                .json({	
                  "message": "bookid not found"
                });	 
              return;
            } else if (err) {
              res	
                .status(404) 
                .json(err); 
              return; 	
            }
            res		
              .status(200)
              .json(Book);
          });
      }; 


//adds book to database using data from /admin/addbook form .
const addBookToCollection = function(req,res) { 

    if(req.body.title != '' && req.body.author != '' && req.body.genre != '' && req.body.rating != null && req.body.status != '')
    {
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
    }
    else{
        console.log("invalid entry");
    }
      BookAppCtrl.displayAdminAddBook(req,res);
};





module.exports = {
    addBookToCollection,
    getBookList,
    bookReadOne
}