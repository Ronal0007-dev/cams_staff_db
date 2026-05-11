var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login | Admin' });
});

router.get('/dashboard', function(req, res, next) {
  res.render('index', { title: 'Dashboard | Admin' });
});

router.get('/staff', function(req, res, next) {
  res.render('staff/staff', { title: 'Staff | Admin' });
});

router.get('/department', function(req, res, next) {
  res.render('staff/department', { title: 'Department | Admin' });
});

module.exports = router;
