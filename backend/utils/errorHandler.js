export const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    console.error(`[${new Date().toISOString()}] ${message}:`, err);

    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
};
