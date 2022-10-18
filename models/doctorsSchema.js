const { Schema, model } = require('mongoose')
const { ObjectId } = Schema.Types

const doctorsSchema = new Schema({


    dr_id: {
        type: Number,
        required: true
    },

    dr_hosp_Id: {
        type: String,
        required: true,
        trim: true,
        lowercase: true

    },

    dr_name: {

        type: String,
        required: true,
        trim: true,
        lowercase: true
    },

    dr_age: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },

    dr_degree: {

        type: String,
        required: true,
        trim: true,
        lowercase: true
    },


   dr_gender: {

       type : String,
       enum : ['Male', 'Female', 'Other']

    },

    dr_dob : {
        type : String,
        required : true
    },

    dr_mob : {
        type : String,
        required : true
    },

    dr_email : {
        type : String,
        required : true
    },
    dr_status: {
        type: String,
        enum: ['true', 'false']
    },
    dr_dateAdded: {
        type: String
    },
    dr_dateUpdated: {
        type: String
    }

})

module.exports = model('Doctor', doctorsSchema)