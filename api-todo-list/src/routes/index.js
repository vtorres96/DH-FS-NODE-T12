const { Router } = require('express')
const router = Router()

const TaskController = require('../controllers/TaskController')

router.get('/api/task/list', TaskController.index)
router.post('/api/task/create', TaskController.create)

module.exports = router