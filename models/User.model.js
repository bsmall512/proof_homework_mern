const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
	User_ID: String,
	IP: String,
	Geo: String,
	Industry: String,
	Company_Size: String
})

module.exports = User = mongoose.model('user', UserSchema); 