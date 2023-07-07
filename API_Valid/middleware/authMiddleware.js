const jwt = require('jsonwebtoken');

const tokenController = require('../controller/tokenController');

const authenticate = (req, res, next) => {
  try {

    console.log("Inner middleware");

    const token = req.body.token;
    const secret = process.env.JWT_SECRET;
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    return decoded;
    next();
  } catch (error) {
    console.log("Error: Try again with correct credentials!");
    return res.status(401).json({
      message: 'Invalid or expired token'
    });

  }
};

module.exports = authenticate;