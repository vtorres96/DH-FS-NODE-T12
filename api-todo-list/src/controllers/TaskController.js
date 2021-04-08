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
      return res.status(201).json(task);
    } catch (error) {
      return res.status(400).json({ message: 'Error: ' + error.message })
    }
  },
}