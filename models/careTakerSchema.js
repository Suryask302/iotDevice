const { Schema, model } = require('mongoose')
const { ObjectId } = Schema.Types

const careTakerSchema = new Schema({


    id: {
        type: Number,
        required: true
    },

    careTakerName: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },

    careTakerId: {

        type: Number,
        required: true,

    },

    age: {

        type: Number,
        required: true,

    },

    dob: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },


    email: {

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
    
    status: {
        type: String,
        enum: ['Active', 'Inactive']
    },

    dateAdded: {
        type: String
    },

    dateUpdated: {
        type: String
    }


})

module.exports = model('Caretaker', careTakerSchema)