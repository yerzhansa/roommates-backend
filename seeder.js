const fs = require('fs')
const mongoose = require('mongoose')
const colors = require('colors')
const dotenv = require('dotenv')

dotenv.config({ path: './config/config.evn' })

const Posting = require('./models/Posting')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})

// Read JSON files
const postings = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/postings.json`, 'utf-8')
)

// Import into DB
const importData = async () => {
  try {
    await Posting.create(postings)

    console.log('Data Imported...'.green.inverse)
    process.exit()
  } catch (err) {
    console.error(err)
  }
}

// Delete data
const deleteData = async () => {
  try {
    await Posting.deleteMany()
    console.log('Data Destroyed...'.red.inverse)
    process.exit()
  } catch (err) {
    console.error(err)
  }
}

if (process.argv[2] === '-i') {
  importData()
} else if (process.argv[2] === '-d') {
  deleteData()
}
