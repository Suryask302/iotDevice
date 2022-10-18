const { Schema, model } = require('mongoose')


const notificationSchema = new Schema({


   not_id: {
        type: Number,
        required: true
    },

    not_user_id: {
        type: Number,
        required: true
    },
    not_msg: {

        type: Number,
        required: true,
        trim: true,
        lowercase: true

    },
    not_display: {
        type: string,
        required: true,
       
    },
    not_display_login: {
        type: string,
        required: true,

    },
    not_display_sound: {
        type: string,
        required: true,

    },
    not_title: {
        type: String,
        required: true,
        trim: true,
        lowercase: true

    },
    not_description: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },

    not_link: {
        type: Number,
        required: true,
        trim: true,
        lowercase: true

    },
    not_seen: {
        type: String,
        enum: ['true', 'false']

    },
    not_status: {
        type: String,
        enum: ['true', 'false']
    },
    not_dateAdded: {
        type: String
    },
    not_dateUpdated: {
        type: String
    }
    
})

module.exports = model('Notification', notificationSchema)