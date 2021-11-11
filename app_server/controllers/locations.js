/* GET 'view books' page */
const home = function(req, res){
    res.render('index', { title: 'Home' });
};

/* GET 'view books' page */
const viewBooks = function(req, res){
    res.render('viewBooks', { title: 'View Books' });
};
/* GET 'login' page */
const login = function(req, res){
    res.render('login', { title: 'Login Page' });
};
/* GET 'register' page */
const register = function(req, res){
    res.render('register', { title: 'Register Page' });
};
module.exports = {
    home,
    viewBooks,
    login,
    register
};
