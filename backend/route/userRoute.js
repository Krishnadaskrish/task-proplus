const express = require('express')
const router = express.Router()
const userController = require('../Controllers/userController')
const tryCatch = require('../MiddleWare/tryCatchMiddileware')
const verifyToken = require('../MiddleWare/userAuthMiddleware')

router.use(express.json())

router.post('/register',tryCatch(userController.Registration))
router.post('/login',tryCatch(userController.Login))
router.post('/cources',verifyToken,tryCatch(userController.AddCourse))
router.get('/cources',verifyToken,tryCatch(userController.Getcources))
router.put('/cources',verifyToken,tryCatch(userController.UpdateCousesById))
router.delete('/cources',verifyToken,tryCatch(userController.deleteCourseById))





module.exports = router