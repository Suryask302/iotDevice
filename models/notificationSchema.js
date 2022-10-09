const { Schema, model } = require('mongoose')


const notificationSchema = new Schema({


    id: {

        type: Number,
        required: true

    },


    dob: {

        type: Number,
        required: true,
        trim: true,
        lowercase: true

    },

    dateAdded : {
        type : String
    },

    dateUpdated : {
        type : String
    }
    
})

module.exports = model('Notification', notificationSchema)