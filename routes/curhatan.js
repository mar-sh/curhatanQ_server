const express = require('express');
const router = express.Router();

const image = require('../helper/images')
const curhatanController = require('../controllers/curhatan.js')

router.get('/', curhatanController.getAll)
router.get('/my-curhat', curhatanController.getCurhatByUser)
router.get('/:id', curhatanController.getCurhatById)
router.post('/', image.multer.single('image'), image.sendUploadToGCS, curhatanController.addCurhat)
router.delete('/:id', curhatanController.deleteCurhat)

module.exports = router