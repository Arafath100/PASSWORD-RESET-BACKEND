// middleware/verifyToken.js
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Access denied. Token is missing.' });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(401).json({ error: 'Access denied. Invalid token.' });
    }
    req.user = user; // Set the user information in the request object for further use
    next();
  });
};

module.exports = verifyToken;