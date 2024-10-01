import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import userRoutes from './routes/user.route.js';
import connectToMongoDB from './db/connectToMongoDb.js';
import { errorHandler } from './utils/errorHandler.js'; 


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/user', userRoutes);

// Base route
app.get('/', (req, res) => res.send('Hello world!'));

// Centralized error handling middleware - should be defined after routes
app.use(errorHandler);

// Start server and connect to MongoDB
app.listen(PORT, async () => {
    try {
        await connectToMongoDB();
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1); // Exit the process if MongoDB connection fails
    }
});
