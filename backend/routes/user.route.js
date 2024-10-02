import express from 'express';
import verifyToken from '../middleware/protectedRoute.js';
import { addFriends, getFriends, getUsers } from '../controller/user.controller.js';
const router = express.Router();

router.get('/allusers', verifyToken, getUsers);
router.post('/friends/add/:friendId', verifyToken, addFriends);
router.get('/getfriends', verifyToken, getFriends);

export default router;