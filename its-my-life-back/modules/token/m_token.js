const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET_KEY;

export const generateToken = (userInfo) => {
    const payload = {
        userEmail: userInfo.email,
        userName: userInfo.username,
    };

    const secret = SECRET_KEY;
    const options = {expiresIn: '1h'}
    const token = jwt.sign(payload, secret, options);
    return token;
}
