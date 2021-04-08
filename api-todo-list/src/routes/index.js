const { Router } = require('express')
const router = Router()

const TaskController = require('../controllers/TaskController')

router.post('/api/task/create', TaskController.create)

module.exports = router