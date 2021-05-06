const { Router } = require('express')
const router = Router()

const TaskController = require('../controllers/TaskController')

router.get('/api/task/list', TaskController.index)
router.post('/api/task/create', TaskController.create)
router.get('/api/task/get-by-id/:id', TaskController.getById)
router.put('/api/task/update/:id', TaskController.update)
router.delete('/api/task/delete/:id', TaskController.delete)

module.exports = router