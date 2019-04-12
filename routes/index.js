const express = require('express');
const router = express.Router();

const Controller = require('../controllers');
const Middleware = require('../middleware/middleware');

const {
  userAuthentication
} = Middleware

const {
  postRegister,
  postLogin,
  postGoogleLogin,
  getLogout
} = Controller;

router.post('/register', postRegister)
router.post('/signin', postLogin )
router.post('/login', postGoogleLogin)
router.get('/logout', getLogout)

module.exports = router;