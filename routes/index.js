const express = require('express');
const router = express.Router();

const Controller = require('../controllers');
const Middleware = require('../middleware/middleware');

const {
  userAuthentication
} = Middleware

const {
  postLogin,
  getLogout
} = Controller;

router.post('/login', postLogin);
router,get('/logout', getLogout)

module.exports = router;