let mongoose = require('mongoose');

const localUri = 'mongodb://localhost/meteostation'

mongoose.connect(localUri, { useMongoClient: true })

let Parameter = mongoose.model('Parameter', {
    type: { type: String, required: true },
    date: { type: Date, required: true },
    value: { type: Number, required: true }
})

module.exports.Parameter = Parameter