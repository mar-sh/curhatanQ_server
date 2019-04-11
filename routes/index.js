const express = require('express');
const router = express.Router();

const Controller = require('../controllers');
const {
  postCreateUser,

} = Controller;


router.post('/register', postCreateUser);

module.exports = router;