const router = require("express").Router()
const homeroutes = require("./homeroutes")
// const postroutes = require("./api/postRoutes")
router.use("/", homeroutes)
// router.use("/post", postroutes)
module.exports = router