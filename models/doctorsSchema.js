const { Schema, model } = require('mongoose')
const { ObjectId } = Schema.Types

const doctorsSchema = new Schema({


    id: {
        type: Number,
        required: true
    },

    hospitalId: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },

    doctorName: {

        type: String,
        required: true,
        trim: true,
        lowercase: true
    },

    age: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },

    degree: {

        type: String,
        required: true,
        trim: true,
        lowercase: true
    },


    gender: {

       type : String,
       enum : ['Male', 'Female', 'Other']

    },

    dob : {
        type : String,
        required : true
    }


})

module.exports = model('Doctor', doctorsSchema)