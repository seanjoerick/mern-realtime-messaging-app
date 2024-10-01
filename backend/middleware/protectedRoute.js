import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  try {
    // Retrieve Token from Cookie
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ success: false, message: 'No token provided, unauthorized!' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach User to Request Object
    req.user = decoded;

    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: 'Invalid token, unauthorized!' });
  }
};
