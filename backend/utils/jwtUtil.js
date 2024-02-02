import jwt from 'jsonwebtoken';

export const tokenGeneration = (id) => {
    return jwt.sign(id, process.env.JWT_SECRET, { expiresIn: '6d' });
}

export const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
}
