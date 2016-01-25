const mongoose = require("mongoose")
const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")

const app = express()

process.env.NODE_ENV = "development"
if (process.env.NODE_ENV == "development") {

	require("./config.js")
	app.use(morgan("dev", {}))

} else {
	app.use(morgan("combined", {}))
}

const PORT = process.env.PORT
const HOST = process.env.HOST
const MONGODB_CONNECTION_URL = process.env.MONGODB_CONNECTION_URL

mongoose.connect(MONGODB_CONNECTION_URL, function (error) {
	if (!error) {
		console.log("Connection with Database established")
	}
	else {
		console.log("Error occured while establishing connection with database")
	}
})

app.set("view engine", "jade")
app.set("views", __dirname + "/views")

app.use(bodyParser.urlencoded({extended: false}))

app.use(require("./routes/main"))


app.listen(PORT, HOST, function (error) {
	if (!error) {
		console.log(`server is listening on ${HOST}:${PORT}`)
	}
})