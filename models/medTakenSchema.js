const { Schema, model } = require('mongoose')


const medicineTakenSchema = new Schema({


    medtek_id: {
        type: Number,
        required: true

    },
    medtek_pt_id: {
        type: Number
    },
    medtek_med_id: {
        type: Number
    },

    medtek_status: {
        type: String,
        enum: ['true', 'false']
    },
    medtek_dateAdded: {
        type: String
    },
    medtek_dateUpdated: {
        type: String
    }



})

module.exports = model('Medicinetaken', medicineTakenSchema)