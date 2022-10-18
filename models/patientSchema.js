const { Schema, model } = require('mongoose')
const { ObjectId } = Schema.Types

const patientSchema = new Schema({

    pt_id: {

        type: Number,
        required: true
        
    },

    pt_age: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },
    pt_name: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },

    pt_bloodGroup: {
        type: String,
        required: true,
        trim: true,
        lowercase: true

    },

    pt_causes: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },

    pt_simptoms: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },

    pt_profession: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },

    pt_gender: {
        type: String,
        enum: ['male, female, other']
    },

    pt_dateTime: {
        type: String,
    },

    // idleTime: {
    //     type: String
    // },

    pt_dob: {
        type: String
    },

    pt_box: {
        type: String
    },

    pt_address: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },

    pt_mob: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },

    pt_status: {
        type: String,
        enum: ['true', 'false']
    },
    pt_dateAdded: {
        type: String
    },
    pt_dateUpdated: {
        type: String
    }

})

module.exports = model('Patient', patientSchema)