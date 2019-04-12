const Curhat = require('../models/Curhatan')

module.exports = {

    getAllCurhat (req, res) {
        Curhat.find({
            isPublic: true
        })
        .then(curhat => {
            res.status(200).json(curhat)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    },

    getCurhatByUser (req, res) {
        Curhat.find({
            userId: req.body.userId
        })
        .then(curhat => {
            res.status(200).json(curhat)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    },

    getCurhatById (req, res) {
        Curhat.findOne({
            _id: req.params.id
        })
        .then(curhat => {
            res.status(200).json(curhat)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    },

    postCreateCurhat (req, res) {
        Curhat.create({
            ...body,
            url: req.file ? req.file.cloudStoragePublicUrl : "https://blkbekasi.kemnaker.go.id/subbagiankeuangan/assets-back-end/dist/img/image-not-available.png",
        })
        .then(curhat => {
            res.status(201).json(curhat)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    },

    deleteCurhat (req, res) {
        Curhat.findOneAndDelete({
            _id: req.params.id
        })
        .then(() => {
            res.status(200).json({
                message: 'Berhasil delete'
            })
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }

}
