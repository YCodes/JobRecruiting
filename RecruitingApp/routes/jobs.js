var express = require('express');
var router = express.Router();
var Job = require('../models/job');
var jwt = require('jsonwebtoken');
var UserProfile = require('../models/userprofile');

/* GET users listing. */
router.get('/list', function (req, res, next) {
  var featuredskills = req.token.user[0].featuredskills
  Job.find({ skills: { $in: featuredskills } }).then(
    //Job.find({ skills: { $in : ['java'] } }).then(
    joblist => {
      res.status(200).json({
        //Retrieve this data at front en using : response.message
        message: joblist,
      })
    }
  ).catch(
    error => res.status(201).json({
      message: 'Error Try to Refresh the page'
    })
    )
});

router.post('/search', function (req, res, next) {
  var tags = req.body
  Job.find({ skills: { $in: tags } }).then(
    //Job.find({ skills: { $in: ['java', 'node'] } }).then(
    joblist => {
      res.status(200).json({
        //Retrieve this data at front en using : response.message
        message: joblist,
      })
    }
  ).catch(
    error => res.status(201).json({
      message: 'Error Try to Refresh the page'
    })
    )
});

router.post('/apply', function (req, res, next) {
  //push the job id and application state into the userprofile document
  var userId = req.token.user[0].id
  console.log(userId)
  var status = "Pending"
  var job = {
    jobid: userId,
    applicationstatus: status,
  }
  //push the job id and the date of application into the userprofil document
  var jobId = req.body
  var date = new Date()
  var applicant =
    {
      id: jobId,
      appliactiondate: date
    }
  //Store the data in the database
  Promise.all([Job.update({ id: jobId }, { $push: { applicants: applicant } }),
  UserProfile.update({ id: userId }, { $push: { jobsapplied: job } })])
    .then(Result => {
      if (Result[0] && Result[1])
        res.status(200).json({
          //Send success message to the front end
          message: "We have submited your application",
        })
    })
    .catch(error =>
      res.status(201).json({
        message: 'Error Try to Refresh the page'
      }))
});


//insert new jobs 

// router.post('/search', function (req, res, next) {

//   var job = new Job(req.body);
//   console.log(job )
//   //Job.find({ skills: { $in : tags } }).then(
//     job.save().then(  
//     result => {
//       res.status(200).json({
//         //Retrieve this data at front en using : response.message
//         message: result,
//       })
//     }
//   ).catch(
//     error => res.status(201).json({
//       message: 'Error Try to Refresh the page'
//     })
//     )
// });

module.exports = router;
