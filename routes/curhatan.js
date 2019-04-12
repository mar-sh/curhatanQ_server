const express = require('express');
const router = express.Router();

const image = require('../helper/images')
const Controller = require('../controllers/curhatan');
const Middleware = require('../middleware/middleware');

const {
  userAuthentication,
  userAuthorization
} = Middleware

const {

  getAllCurhat,
  getCurhatByUser,
  getCurhatById,
  postCreateCurhat,
  deleteCurhat
} = Controller

router.use(userAuthentication);

router.get('/', getAllCurhat)
router.get('/my-curhat', getCurhatByUser)
router.get('/:curhatID', getCurhatById)
router.post('/:userID', userAuthorization, image.multer.single('image'), image.sendUploadToGCS, postCreateCurhat)
router.delete('/:userID/delete/:curhatID', userAuthorization, deleteCurhat)

module.exports = router