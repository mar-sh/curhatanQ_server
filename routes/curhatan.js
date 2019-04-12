const express = require('express');
const router = express.Router();

const image = require('../helper/images')
const Controller = require('../controllers/curhatan');
const Middleware = require('../middleware/middleware');

const {
  userAuthentication
} = Middleware

const {
  getAllCurhat,
  getCurhatByUser,
  getCurhatById,
  postCreateCurhat,
  deleteCurhat
} = Controller

router.get('/', getAllCurhat)
router.get('/my-curhat/:userID', getCurhatByUser)
router.get('/:curhatID', getCurhatById)
router.post('/:userID', image.multer.single('image'), image.sendUploadToGCS, postCreateCurhat)
router.delete('/:userID/delete/:curhatID', deleteCurhat)

module.exports = router