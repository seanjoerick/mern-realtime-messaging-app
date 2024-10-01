import express from 'express';
import verifyToken from '../middleware/protectedRoute.js';
import { getMessage, sendMessage } from '../controller/message.controller.js';

const router = express.Router();

router.get('/:id', verifyToken, getMessage);
router.post('/send/:receiverId', verifyToken, sendMessage);

export default router;