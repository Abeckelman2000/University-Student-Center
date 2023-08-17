const express = require('express')
const router = express.Router()
const { authenticateToken } = require('../utils/JWT')
const { getTokenStatus } = require('../controllers/controller-verify-token')

router.route('/')
.get(authenticateToken, getTokenStatus)

module.exports = router