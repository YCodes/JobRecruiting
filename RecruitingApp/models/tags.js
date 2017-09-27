var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');
// User 
var UserSchema = new mongoose.Schema({
    tags: [string]
});


UserSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Tags', UserSchema);