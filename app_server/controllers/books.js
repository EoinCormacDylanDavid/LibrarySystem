const { response } = require('express');
const apiBooks = require('../../app_api/controllers/books');
const request = require('request');
const apiOptions = { 
    server : 'http://localhost:3000' 
    }; 
    if (process.env.NODE_ENV === 'production') { 
    apiOptions.server = 'https://librarysystemeddc.herokuapp.com'; //need to put our heroku link here
    }

    const displayAdminAddBook = function(req,res){
        res.render('admin-AddBook');
    }

    
    const _renderBookPage = function(req, res, responseBody){ 
        res.render('book-list', {books: responseBody });
        };

    const booklist = function(req, res){
        const path = '/api/allBookData'; 
        const requestOptions = { 
        url : apiOptions.server + path, 
        method : 'GET', 
        json : {},
        qs : {}
        };
        request(
            requestOptions,function(err, response, body) {
            _renderBookPage(req, res, body); 
            }
            );
        };
            
            
            
        

module.exports = {
    displayAdminAddBook,
    booklist,
    _renderBookPage
};
