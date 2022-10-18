const { Schema, model } = require('mongoose')
const { ObjectId } = Schema.Types

const careTakerSchema = new Schema({ 
    ct_Id: {
        type: Number,
        required: true,
    },
    ct_name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    ct_age: {
        type: Number,
        required: true,
    },
    ct_dob: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    ct_email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    ct_mob: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    ct_status: {
        type: String,
        enum: ['true', 'false']
    },
    ct_dateAdded: {
        type: String
    },
    ct_dateUpdated: {
        type: String
    }
})

module.exports = model('Caretaker', careTakerSchema)