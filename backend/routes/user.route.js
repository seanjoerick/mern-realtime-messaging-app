import express from 'express';
import verifyToken from '../middleware/protectedRoute.js';
import { getUsersForSidebar } from '../controller/user.controller.js';
const router = express.Router();


router.get('/', verifyToken, getUsersForSidebar);



export default router;