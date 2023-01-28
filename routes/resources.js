const express = require('express')
const router = express.Router()
const verifyAccess = require("../middleware/verifyaccess")
const resources = require('../controllers/resources')

router.use(verifyAccess)
router.get('/',resources)



module.exports = router