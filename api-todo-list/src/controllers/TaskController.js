const { Task } = require("../models")

module.exports = { 
  async index(req, res, next){
    try {
      let tasks = await Task.findAll({
        where: {
          deleted: 0,
          done: 0
        }
      })
  
      return res.status(200).json(tasks)
    } catch (error) {
      return res.status(400).json({ message: 'Error: ' + error.message })
    }
  },

  async create(req, res, next){
    try {
      let task = await Task.create({ ...req.body })
      return res.status(201).json(task)
    } catch (error) {
      return res.status(400).json({ message: 'Error: ' + error.message })
    }
  },

  async getById (req, res, next) { 
    try {
      let id = req.params.id
      let task = await Task.findByPk(id)
      return res.status(200).json(task)
    } catch (error) {
      return res.status(400).json({ message: 'Error:' + error.message })
    }
  },

  async update (req, res, next) {
    try {
      let id = req.params.id
      let { title, description, done = false } = req.body
      
      let task = await Task.findByPk(id)

      if(!task) {
        return res.status(200).json({ message: 'Task not found' })
      }

      task.update({
        title,
        description,
        done
      })
      
      return res.status(200).json(task)
    } catch (error) {
      return res.status(400).json({ message: 'Error:' + error.message })
    }
  },

  async delete (req, res, next) {
    let id = req.params.id
    let task = await Task.findByPk(id)

    if(!task) {
      return res.status(200).json({ message: 'Task not found' })
    }

    task.update({
      deleted: true
    })

    return res.status(200).json({ message: 'Task deleted' })
  },
}