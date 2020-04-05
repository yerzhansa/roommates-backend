const mongoose = require('mongoose')

const PostingSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    trim: true,
    required: true,
  },
})

module.exports = mongoose.model('Posting', PostingSchema)
