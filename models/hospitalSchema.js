const { Schema, model } = require('mongoose')


const hospitalSchema = new Schema({


    id: {
        type: Number,
        required: true
    },


    hospitalId: {

        type: Number,
        required: true,
        trim: true,
        lowercase: true

    },

    hospitalName: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },

    address: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },

    contact: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },

    registrationNO: {

        type: String,
        required: true

    },

    establishedDate: {
        type: String
    }


})

module.exports = model('Hospital', hospitalSchema)