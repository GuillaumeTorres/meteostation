let express = require('express')
let router = express.Router()
let Value = require('../db/db').Value

router.get('/test', (req, res) => {
    res.send({ value: Math.random() * 10 + 1 })
})

module.exports = router
