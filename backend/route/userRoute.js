const express = require('express')
const router = express.Router()
const userController = require('../Controllers/userController')
const tryCatch = require('../MiddleWare/tryCatchMiddileware')
const verifyToken = require('../MiddleWare/userAuthMiddleware')

router.use(express.json())

router.post('/register',tryCatch(userController.Registration))
router.post('/login',tryCatch(userController.Login))
router.post('/cources',verifyToken,tryCatch(userController.AddCourse))


module.exports = router