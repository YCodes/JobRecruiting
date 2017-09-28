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
    address: {
        country: { type: String },
        street: { type: String },
        state: { type: String },
        zipCode: { type: String }
    },
    currentcarrierlevel: { type: String },
    featuredskills: [String],
    languages: [String],
    links: [{ links_linkedin: String, links_github: String, links_other: String }],
    education: [{
        edu_school: String,
        edu_country: String,
        edu_field: String,
        edu_degree: String,
        edu_year: String
    }],
    proffesionalexperience: [{
        prof_title: String,
        prof_company: String,
        prof_location: String,
        prof_start: Date,
        prof_end: Date,
        prof_description: String
    }],
    jobsapplied: [{
        jobid: String,
        applicationstatus: String,
    }]
});


UserProfileSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('UserProfile', UserProfileSchema);