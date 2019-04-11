const { OAuth2Client } = require('google-auth-library');

const User = require('../models/User');
const Helper = require('../helper/helper');
const {
  bcryptHash,
  tokenize
} = Helper

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

module.exports = {

  postLogin(req, res) {
    let currentUser = {};
    const { id_token } = req.body

    client.verifyIdToken({
      idToken: id_token,
      audience: process.env.GOOGLE_CLIENT_ID
    })
      .then((googleUser) => {
        currentUser = googleUser.payload;

        return User.findOne({ email: currentUser.email })
      })
      .then((user) => {
        if (user) {
          const token = tokenize(user._id, user.email)

          res.status(200).json({ message: 'WELCOME', token, userId: user._id })
        } else {
          const fullname = currentUser.name;
          const email = currentUser.email;
          const password = bcryptHash(fullname, 8);

          const newUser = new User({
            fullname,
            email,
            password
          })

          return newUser.save()
        }
      })
      .then((user) => {
        const token = tokenize(user._id, user.email)

        res.status(201).json({ message: 'WELCOME', token, userId: user._id })
      })
      .catch((err) => {
        res.status(500).json({ message: err.message })
      })
  },

  getLogout(req, res) {
    req.authenticated = null;
    res.status(200).json({ message: 'LOGGED OUT' })
  }

}