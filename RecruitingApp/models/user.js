var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');
// User 
var UserSchema = new mongoose.Schema({
    id: { type: String, unique: true, required: true },
    name: { type: String, unique: true, required: true },
    password: { type: String, required: true }
});


UserSchema.plugin(mongooseUniqueValidator);

module.exports= mongoose.model('User', UserSchema);