const { Schema, model } = require('mongoose')
const { ObjectId } = Schema.Types

const careTakerAlignedSchema = new Schema({

    cta_id: {
        type: Number,
        required: true,
    },
    cta_patient_id: {
        type: Number,
        required: true,
    },
    cta_ct_id: {
        type: String,
        enum: ['true', 'false']
    },
    cta_dateAdded: {
        type: String
    },
    cta_dateUpdated: {
        type: String
    }
})

module.exports = model('CareTaker_Aligned', careTakerAlignedSchema)