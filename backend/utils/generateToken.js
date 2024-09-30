import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    try {
        const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
            expiresIn: '15d',
        });

        res.cookie('jwt', token, {
            maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
            httpOnly: true, // Prevent XSS attacks
            sameSite: 'strict', // Prevent CSRF attacks
            secure: process.env.NODE_ENV === 'production', // Only send cookie over HTTPS in production
        });
    } catch (error) {
        console.error('Error generating token:', error);
        throw new Error('Could not generate token'); 
    }
};

export default generateTokenAndSetCookie;
