var express = require('express');
const User = require('../models/account');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/show', function(req, res, next) {
  User.find({}, (err, response) => {
    if(err){
      res.render('show',{error: 'no se pueden mostrar usuarios'})
    }
    res.render('show',{users:response});
  });
});

router.post('/subscribe', function(req, res, next){
  let user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });
  user.save( err => {
    if(err){
      res.render('index', {error: 'no se pudo registrar usuario'})
    } else {
      res.redirect('/')
    }
  });
});

module.exports = router;
