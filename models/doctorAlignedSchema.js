const { Schema, model } = require('mongoose')
const { ObjectId } = Schema.Types

const drAlignedSchema = new Schema({


    id: {
        type: Number,
        required: true
    },

    doctorId: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },

    patientId: {

        type: String,
        required: true,
        trim: true,
        lowercase: true
    },

    status: {

        type: String,
        enum : ['Active', 'Unactive']
    },

    degree: {

        type: String,
        required: true,
        trim: true,
        lowercase: true
    },


    dateAdded: {
       type : String,
       required : true

    },

    dateUpdated : {
        type : String,
        required : true
    }


})

module.exports = model('Doctor_aligned', drAlignedSchema)