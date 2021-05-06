const Task = require("../models/Task")

module.exports = { 
  async index (req, res, next){
    try {
      let tasks = await Task.find()
  
      return res.status(200).json(tasks)
    } catch (error) {
      return res.status(400).json({ message: 'Error: ' + error.message })
    }
  },

  async create (req, res, next){
    try {
      let task = new Task({ ...req.body })
      await task.save()
      return res.status(201).json(task)
    } catch (error) {
      return res.status(400).json({ message: 'Error: ' + error.message })
    }
  },

  async getById (req, res, next) { 
    try {
      let id = req.params.id
      let task = await Task.findById(id)
      return res.status(200).json(task)
    } catch (error) {
      return res.status(400).json({ message: 'Error:' + error.message })
    }
  },

  async update (req, res, next) {
    try {
      let id = req.params.id
      let { title, description, done = false } = req.body
      
      let task = await Task.findByIdAndUpdate(id, {
        $set: {
          title,
          description,
          done
        }
      })
      
      return res.status(200).json(task)
    } catch (error) {
      return res.status(400).json({ message: 'Error:' + error.message })
    }
  },

  async delete (req, res, next) {
    try {      
      let id = req.params.id
      await Task.findByIdAndUpdate(id, {
        $set: {
          deleted: true
        }
      })
  
      return res.status(200).json({ message: 'Task deleted' })
    } catch (error) {
      return res.status(400).json({ message: 'Error:' + error.message })
    }
  },
}