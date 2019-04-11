const jwt = require('jsonwebtoken');

module.exports = {
  userAuthentication: (req, res, next) => {

    try{  
      const decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET);
      const { id, email } = decoded
      req.authenticated = { id, email};

      next();
    }
    catch{
      res.status(401).json({message: 'Authentication failed'});
    }
  }
 
}