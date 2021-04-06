const { Router } = require('express')
const router = Router()

router.get('/', function(req, res, next) {
  res.send('Hallo Word');
});

module.exports = router