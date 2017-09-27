var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Job Recruiting - Backend' });
});

router.post('/', function(req, res, next) {
  res.render('index', { title: 'Job Recruiting Site - From Angular' });
});

router.get('/verifylogin', function(req, res, next) {
  data = [{username:"admin", password:"admin"}];
  res.send(data);
});

module.exports = router;
