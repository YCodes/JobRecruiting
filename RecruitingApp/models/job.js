var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var JobSchema = new mongoose.Schema({
    id: { type: String, unique: true, required: true },
    title: { type: String, required: true },
    position: { type: String, required: true },
    skills: [String],
    experiencerequired: { type: String, required: true },
    employer: { type: String, required: true },
    location:{ type: String, required: true },
    jobdescription: { type: String, required: true },
    type:{ type: String, required: true },
    publicationdate: { type: Date, required: true },
    enddate: { type: Date, required: true },
    applicants: [{
        id: { type: String },
        appliactiondate: { type: Date  }
    }]
});


JobSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Job', JobSchema);