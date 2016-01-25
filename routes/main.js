const router = require("express").Router()
const mainController = require("../controllers/mainController")

router.get("/", mainController.getIndex)
router.post("/subscribe", mainController.postSubscribe)


module.exports = router