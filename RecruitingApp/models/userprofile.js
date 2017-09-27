var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var UserProfileSchema = new mongoose.Schema({
    id: { type: String, unique: true, required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    phonenumber: { type: String, required: true },
    dateofbirth: { type: Date, required: true },
    addresse: {
        country: { type: String },
        street: { type: String },
        state: { type: String },
        zipCode: { type: String }
    },
    currentcarrierlevel: { type: String },
    featuredskills: [String],
    languages: [String],
    links: [String],
    education: [{
        school: String,
        country: String,
        field: String,
        dirgee: String,
        year: String
    }],
    proffesionalexperience: [{
        title: String,
        company: String,
        location: String,
        startdate: Date,
        enddate: Date,
        description: String
    }],
    jobsapplied: [{
        jobid: String,
        applicationstatus: String,
    }]
});


UserProfileSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('UserProfile', UserProfileSchema);