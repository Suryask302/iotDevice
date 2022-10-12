const { Schema, model } = require('mongoose')


const medicineSchema = new Schema({


    id: {

        type: Number,
        required: true

    },


    medicineId: {

        type: Number,
        required: true,
        trim: true,
        lowercase: true

    },

    medicineName: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },

    compartment: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },

    colors: {

        type: String,
        required: true,
        enum: ['Red', 'Green', 'Blue', "Black"]

    },

    medicineType: {

        type: String,
        enum: ['Capsule', 'Tablet', 'Liquid', 'Eyedrop']

    },

    frequencyDays: {

        type: String,
        enum: ['oneDayGap', 'twoDayGap', 'everyDay']

    },

    doseCounts: {

        type: String,
        enum: ['dose1', 'dose2', 'dose3']

    },

    dateAdded: {
        type: String,
    },

    repeatStatus: {
        type: String,
        enum: ['Mute', 'Unmute']
    },

    repeatDose: {
        type: String,
        enum: ['doesNotRepeat', 'every5Minutes', 'every10Minutes', 'every20Minutes', 'every30Minutes']
    },

}, { timestamps: true })

module.exports = model('Medicine', medicineSchema)