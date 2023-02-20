const express = require('express')
const controller = require('../controllers/contentCTRL')

const router = express.Router()


router.get('/', controller.test)

module.exports = router