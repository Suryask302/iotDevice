const { Schema, model } = require('mongoose')


const contactUsSchema = new Schema({


    cont_id: {
        type: Number,
        required: true
    },
    cont_name: {
        type: String,
        required: true
    },

    cont_email: {
        type: String
    },

   cont_msg: {

        type: String,
        required: true

    },
    cont_dateAdded: {
        type: String
    },
    cont_dateUpdated: {
        type: String
    },
    cont_status: {
        type: String,
        enum: ['true', 'false']
    },
})

module.exports = model('Contactus', contactUsSchema)