const express = require('express');
const router = express.Router()
const userControllers = require('../controller/user-cont')

router.get('/users', userControllers.findAllusers)
router.get('/users/:username', userControllers.findone)
router.post('/users', userControllers.create)
router.put('/users/:id', userControllers.findAndUpdate)
router.delete('/users/:id', userControllers.findByIdAndRemove)

module.exports = router