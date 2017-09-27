var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var User = require('../models/user');
var UserProfile = require('../models/userprofile');


// sign up public 
router.post('/signup', function (req, res, next) {

  //check if the username is valid 
  Promise.all([User.findOne({ name: req.body.user.name })]).then(resp => {
    res.status(201).json({
      message: 'Username Invalid'
    });
    return next()
  }).catch(err=>{})

  //Create the instances of the user and the userprofil 
  //and populate them with the data from the request

  var userprofile = new UserProfile(req.body.userprofile);
  var user = new User({
    id: req.body.user.id,
    name: req.body.user.name,
    password: bcrypt.hashSync(req.body.user.password, 10)
  });



  //Save the user in the data and return a success message with the token
  Promise.all([userprofile.save(), user.save()]).
    then(result => {
      var token = jwt.sign({ user : result }, 'secret', { expiresIn: 7200 });
      res.status(200).json({
        message: 'Username Valid',
        token: token,
        userId: result[1]._id
      });
    }).catch(err => {
      res.status(201).json({
        message: 'Error Retry',
        obj: err
      });
    })
});



// sign in public 

router.post('/signin', function (req, res, next) {

  Promise.all(
    [UserProfile.findOne({ userName: req.body.name }),
    User.findOne({ name: req.body.name })]).then(user => {

      // check if the user is the password is valid

      if (!bcrypt.compareSync(req.body.password, user[1].password)) {
        return res.status(401).json({
          title: 'Login failed',
          error: { message: 'Invalid login credentials' }
        });
      }

      // create a token and send it with the response 
      
      

      var token = jwt.sign({ user: user }, 'secret', { expiresIn: 7200 });
      res.status(200).json({
        message: 'Successfully logged in',
        token: token,
        userId: user[1]._id
      });

    }).catch(err => {

      //If other error send an error message with the response


      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });


    }
    );
});

module.exports = router;
