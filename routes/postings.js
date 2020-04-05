const express = require('express')
const { getPostings } = require('../controllers/Posting')

const router = express.Router({ mergeParams: true })

router.route('/').get(getPostings)

module.exports = router
