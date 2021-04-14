const api = require('../config/api')

module.exports = {
  async index(req, res, next){
    try {
      let limit = req.params.limit
      let { data } = await api.get('/photos', {
        params: {
          _limit: limit
        }
      })
      return res.status(200).json(data)
    } catch (error) {
      return res.status(400).json({ message: 'Error: ' + error.message })
    }
  },

  async getById(req, res, next){
    try {
      let id = req.params.id
      let { data } = await api.get('/photos/' + id)
      return res.status(200).json(data)
    } catch (error) {
      return res.status(400).json({ message: 'Error: ' + error.message })
    }
  }
}