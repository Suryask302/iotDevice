const { Schema, model } = require('mongoose')


const hospitalSchema = new Schema({


    hosp_id: {
        type: Number,
        required: true
    },




    hosp_name: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },

    hosp_address: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },

    hosp_contact: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },
    
    hosp_email: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },

    hosp_reg_no: {

        type: String,
        required: true

    },

    hosp_establishedDate: {
        type: String
    },
    hosp_status: {
        type: String,
        enum: ['true', 'false']
    },
    hosp_dateAdded: {
        type: String
    },
    hosp_dateUpdated: {
        type: String
    }


})

module.exports = model('Hospital', hospitalSchema)