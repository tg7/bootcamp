/* Mongoose Example (Students) (18.3.03)
 * ===================================== */ 

// dependency
var mongoose = require('mongoose');

// create the Schema class
var Schema = mongoose.Schema;

// instantiate a userSchema object with the Schema class we just made
var UserSchema = new Schema({

	string: {
	type: String,
	trim: true,
	required: "string is required"
},
	number: {
	type: Number,
	unique: true
	required: true
},
	email: {
	type: String,
	match: [/.+\@.+\..+/, "please enter a valid email address"]
},
	boolean: Boolean,

	array: Array,

	date: {
	type: Date
	default: Date.now
	}

});

// create the "User" model with our UserSchema schema
var User = mongoose.model('User', UserSchema);

// export the User model, so it can be used in server.js with a require.
module.exports = User;
