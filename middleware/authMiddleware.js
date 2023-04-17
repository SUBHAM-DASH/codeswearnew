import Users from '@/models/users/Users';
import jwt from 'jsonwebtoken';

const verifyToken = (cookiesToken) => {
    try {
        const decoded = jwt.verify(cookiesToken, process.env.JWT_SECRET);
        return decoded;
    } catch (err) {
        return false;
    }
};

const tokenMiddleware = (handler) => async (req, res) => {
    // const headerToken = req.headers.authorization?.split(' ')[1];
    const cookiesToken = req.headers['codeswear-token'];
    if (!cookiesToken) {
        return res.status(401).json({ message: 'Authorization token is missing' });
    }
    const decoded = verifyToken(cookiesToken);
    if (!decoded) {
        return res.status(401).json({ message: 'Authorization token is invalid' });
    }
    const existUser = await Users.findOne({ _id: decoded.userId });
    if (!existUser) {
        return res.status(404).json({ status: "failed", message: "User not exists." });
    }
    req.userId = decoded.userId;
    return handler(req, res);
};

export default tokenMiddleware;
