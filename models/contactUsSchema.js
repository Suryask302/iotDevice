const { Schema, model } = require('mongoose')


const contactUsSchema = new Schema({


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

    message: {

        type: String,
        required: true

    },

    createdAt: {
        type: String,

    }
})

module.exports = model('Contactus', contactUsSchema)