var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('API is working properly');
});

//without this code below - error message received that router.use requires a middleware function
module.exports = router;