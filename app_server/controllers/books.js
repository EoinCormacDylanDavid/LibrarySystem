const { response } = require('express');
const request = require('request');
const apiBooks = require('../../app_api/controllers/books');
const apiOptions = { 
    server : 'http://localhost:3000' 
    }; 
    if (process.env.NODE_ENV === 'production') { 
    apiOptions.server = 'https://pure-temple-67771.herokuapp.com'; //need to put our heroku link here
    }

    const displayAdminAddBook = function(req,res){
        res.render('admin-AddBook');
    }

module.exports = {
    displayAdminAddBook
};