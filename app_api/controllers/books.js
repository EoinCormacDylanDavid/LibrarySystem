const mongoose = require('mongoose');
const Book = mongoose.model('Book');

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
    var testBook = new Book({
        title:"Test Book",
        author:"Test Author",
        genre:"Test Genre",
        rating: 5,
        status: "available"
    });
    testBook.save(function(err,book){
        if(err) return console.error(err);
        console.log(book.title + " saved to book collection");
    });
};



module.exports = {
    addBookToCollection,
    getBookList,
    
}