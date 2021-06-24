const mongoose = require('mongoose')

const vehiclesSchema = mongoose.Schema({
    originalID: {
        type: String,
        required: true,
    },
    vin: {type: String},
    make: {type: String},
    model: {type: String},
    mileage: {type: Number},
    year: {type: Number},
    price: {type: Number},
    zipCode: {type: String},
    created: {type: Date},
    updated: {type: Date},
})

const Vehicle = mongoose.model('Vehicle', vehiclesSchema)

module.exports = Vehicle