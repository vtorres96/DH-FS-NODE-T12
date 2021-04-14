const { Router } = require('express')
const router = Router()

const PhotoController = require('../controllers/PhotoController')

router.get('/api/photo/:limit?', PhotoController.index)
router.get('/api/photo/:id', PhotoController.getById)

module.exports = router