
const express = require('express')
const MovieCtrl = require('../controllers/movie-ctrl')
const router = express.Router()

router.get('/getBisection', MovieCtrl.getBisection)
router.get('/getFalseposition', MovieCtrl.getFalseposition)
router.get('/getNewtonrapshon', MovieCtrl.getNewtonrapshon)
router.get('/getOnepoint', MovieCtrl.getOnepoint)
router.get('/getNewtonrapshon', MovieCtrl.getSecant)
module.exports = router