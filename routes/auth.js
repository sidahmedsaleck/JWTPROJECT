const {login , signUP } = require("../controllers/auth")
const express = require('express')
const router = express.Router()



router.post('/login',login)
router.post('/signup',signUP)


module.exports = router