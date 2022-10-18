const { Schema, model } = require('mongoose')


const medicineSnoozedSchema = new Schema({


    medsn_id: {
        type: Number,
        required: true

    },
    medsn_pt_id: {
        type: Number
    },
    medsn_med_id: {
        type: Number
    },
    medsn_status: {
        type: String,
        enum: ['true', 'false']
    },
    medsn_dateAdded: {
        type: String
    },
    medsn_dateUpdated: {
        type: String
    }


})

module.exports = model('Medicinesnoozed', medicineSnoozedSchema)