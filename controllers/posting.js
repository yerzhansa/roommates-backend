const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')
const Posting = require('../models/Posting')

exports.getPostings = asyncHandler(async (req, res, next) => {
  const postings = await Posting.find()

  res.status(200).json({
    success: true,
    data: postings,
  })
})
