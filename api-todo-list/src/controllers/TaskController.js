module.exports = { 
  async create(req, res, next){
    let task = req.body
    return res.send(task)
  }
}


