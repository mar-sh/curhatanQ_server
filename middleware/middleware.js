const jwt = require('jsonwebtoken');
const Curhat = require('../models/Curhatan')

module.exports = {
  userAuthentication: (req, res, next) => {

    try {
      const decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET);
      const { id, email } = decoded
      req.authenticated = { id, email };

      next();
    }
    catch (err) {
      res.status(401).json({ message: 'Authentication failed' });
    }
  },

  userAuthorization: (req, res, next) => {
    try {
      if (req.authenticated.id === req.params.id) {
        next()
      }
    }
    catch (err) {
      res.status(401).json({
        message: 'Unauthorized'
      })
    }
  }
}