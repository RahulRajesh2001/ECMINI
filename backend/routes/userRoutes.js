import express from 'express'
import { getAllUsers, login, register } from '../controllers/userControllers.js'
const router = express.Router()

router.post('/login', login);
router.post('/register',register)
router.get('/allUsers',getAllUsers)

export default router
