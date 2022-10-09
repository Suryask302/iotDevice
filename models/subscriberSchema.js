const { Schema, model } = require('mongoose')


const subscriberSchema = new Schema({


    id: {

        type: Number,
        required: true

    },

    name: {

        type: String,
        required: true

    },

    email: {
        type: String
    },

    createdAt: {
        type: String,
    },

    updatedAt: {
        type: String
    }
    
})

module.exports = model('Subscriber', subscriberSchema)