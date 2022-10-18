const { Schema, model } = require('mongoose')
const { ObjectId } = Schema.Types

const drAlignedSchema = new Schema({


    dra_id: {
        type: Number,
        required: true
    },

    dra_dr_Id: {
        type: String,
        required: true,
        trim: true,
        lowercase: true

    },
    dra_pt_Id: {
        type: String,
        required: true,
        trim: true,
        lowercase: true

    },
    dra_status: {
        type: String,
        enum: ['true', 'false']
    },
    dateAdded: {
        type: String
    },
    dateUpdated: {
        type: String
    }


    // patientId: {

    //     type: String,
    //     required: true,
    //     trim: true,
    //     lowercase: true
    // },

    // status: {

    //     type: String,
    //     enum : ['Active', 'Unactive']
    // },

    // degree: {

    //     type: String,
    //     required: true,
    //     trim: true,
    //     lowercase: true
    // },


    // dateAdded: {
    //    type : String,
    //    required : true

    // },

    // dateUpdated : {
    //     type : String,
    //     required : true
    // }


})

module.exports = model('Doctor_aligned', drAlignedSchema)