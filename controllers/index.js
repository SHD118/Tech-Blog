const router = require("express").Router()
const homeroutes = require("./homeroutes")
const postroutes = require("./postroutes")
router.use("/", homeroutes)
router.use("/post", postroutes)
module.exports = router