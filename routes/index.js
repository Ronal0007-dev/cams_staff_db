var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login | Admin' });
});

router.get('/dashboard', function(req, res, next) {
  res.render('index', { title: 'Quantum Dashboard' });
});


module.exports = router;
