const { Schema, model } = require('mongoose')
const { ObjectId } = Schema.Types

const patientSchema = new Schema({

    id: {
        type: Number,
        required: true
    },

    age: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },

    height: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },

    width: {

        type: String,
        required: true,
        trim: true,
        lowercase: true
    },

    name: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },

    bloodGroup: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },

    causes: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },

    simptoms: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },

    profession: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },

    gender: {
        type: String,
        enum: ['male, female, other']
    },

    dateTime: {
        type: String,
    },

    idleTime: {
        type: String
    },

    dob: {
        type: String
    },

    address: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },

    contactDetails: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },

    status: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    }


})

module.exports = model('Patient', patientSchema)