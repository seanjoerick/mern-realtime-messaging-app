import express from 'express';
import verifyToken from '../middleware/protectedRoute.js';
import { acceptFriends, addFriends, getFriends, getPendingRequest, getUsers } from '../controller/user.controller.js';
const router = express.Router();

router.get('/allusers', verifyToken, getUsers);
router.post('/friends/add/:userId', verifyToken, addFriends);
router.post('/friends/accept/:requesterId', verifyToken, acceptFriends);
router.get('/getfriends', verifyToken, getFriends);
router.get('/getpending', verifyToken, getPendingRequest);

export default router;