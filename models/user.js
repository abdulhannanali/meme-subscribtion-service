var mongoose = require("mongoose")

var userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	verified: {
		type: Boolean,
		required: true,
		default: false
	},
	timestamps: {}
})

module.exports = mongoose.model("user", userSchema)