const User = require('../models/User');
const Helper = require('../helper/helper');
const{
  bcryptHash,
  tokenize
} = Helper

module.exports = {

  postCreateUser(req, res) {
    const {fullname, email, password} = req.body;
    const newUser = new User({
      fullname,
      email,
      password
    })
    newUser.password = bcryptHash(password);

    newUser.save()
      .then((user) => {
        res.status(201).json({message: 'OK', user})
      })
      .catch((err) => {
        res.status(500).json({message: err.message});
      })
  }


}