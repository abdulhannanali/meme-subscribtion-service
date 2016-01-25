var User = require("../models/user")

function getIndex(req, res, next) {
	res.render("index", {})
}

function postSubscribe(req, res, next) {
	var body = req.body
	if (body.email && body.name) {
		
	}
}


/*
 * check if the user with the given email already exists
 */
function checkExistingUsers(email) {
	return User.findOneById({
		email: email
	})
}

// returns a promise after creating a user
function createNewUser(name, email) {
	var user = new User({
		name: name,
		email: email
	})

	return user.save()
}

module.exports = {
	getIndex: getIndex,
	postSubscribe: postSubscribe
}