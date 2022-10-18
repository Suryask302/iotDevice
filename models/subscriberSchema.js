const { Schema, model } = require('mongoose')


const subscriberSchema = new Schema({


    sub_id: {
        type: Number,
        required: true
        ///auto inc //primary
    },

    sub_name: {
        type: String,
        required: false
    },
    sub_email: {
        type: String
    },
    sub_send: {
        type: String,
        enum: ['true', 'false']
        //default true
    },
    sub_status: {
        type: String,
        enum: ['true', 'false']
    },
    sub_dateAdded: {
        type: String
    },
    sub_dateUpdated: {
        type: String
    }

    
})

module.exports = model('Subscriber', subscriberSchema)