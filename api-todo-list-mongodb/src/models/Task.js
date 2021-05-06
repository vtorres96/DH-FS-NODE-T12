const mongoose = require('mongoose')
const { Schema } = mongoose

const taskSchema = new Schema({
  title: String,
  description: String,
  done: Boolean,
  deleted: Boolean,
})

module.exports = mongoose.model('Task', taskSchema)