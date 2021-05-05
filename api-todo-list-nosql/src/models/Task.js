const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  title:  String, // shorthand for {type: String}
  description: String,
  done: Boolean,
  deleted: Boolean,
})

module.exports = mongoose.model('Task', schema)