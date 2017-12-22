let express = require('express')
let router = express.Router()
let Parameter = require('../db/db').Parameter

router.get('/temperature', (req, res) => {
    Parameter.find({'type': 'temperature'}).sort({ date : -1 }).limit(1)
        .then(temperature => {
            res.send(temperature)
        })
})

router.get('/pressure', (req, res) => {
    Parameter.find({'type': 'pressure'}).sort({ date : -1 }).limit(1)
        .then(pressure => {
            res.send(pressure)
        })
})

router.get('/luminosity', (req, res) => {
    Parameter.find({'type': 'luminosity'}).sort({ date : -1 }).limit(1)
        .then(luminosity => {
            res.send(luminosity)
        })
})

module.exports = router
