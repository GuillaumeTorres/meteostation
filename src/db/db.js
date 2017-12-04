let mongoose = require('mongoose');
let Schema = mongoose.Schema

const localUri = 'mongodb://localhost/meteostation'

mongoose.connect(localUri, { useMongoClient: true })

let Value = mongoose.model('Value', {
    type: { type: String, required: true },
    date: { type: Date, required: true },
    value: { type: Number, required: true }
})

module.exports.Value = Value