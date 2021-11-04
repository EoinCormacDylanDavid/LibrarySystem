var express = require('express');
var router = express.Router();

const ctrlLocations = require('../controllers/locations');

router.get('/', ctrlLocations.home);
router.get('/viewBooks', ctrlLocations.viewBooks);
router.get('/login', ctrlLocations.login);
router.get('/register', ctrlLocations.register);


module.exports = router;
