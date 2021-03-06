const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {

  bcryptHash(password) {
    return bcrypt.hashSync(password, 8);
  },

  bcryptVerify(password, hash) {
    return bcrypt.compareSync(password, hash);
  },

  tokenize(id, email) {
    return jwt.sign({
      id,
      email
    }, process.env.JWT_SECRET)
  }

}