const { Schema, model } = require('mongoose')


const reminderSchema = new Schema({


    id: {

        type: Number,
        required: true

    },

    userId: {
        type: Number,
        required: true
    },


    notification: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },

    selfId: {
        type: String
    },

    title: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },

    details: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },

    timimg: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },

    seenNotification: {
        type: Boolean,
        default: false
    },

    dateUpdated: {
        type: String
    },

    dateUpdated: {
        type: String
    }

})

module.exports = model('Reminder', reminderSchema)