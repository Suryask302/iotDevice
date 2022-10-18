const { Schema, model } = require('mongoose')


const medicineMissedSchema = new Schema({


   medmis_id: {
        type: Number,
        required: true

    },
    medmis_pt_id: {
        type: Number
    },
    medmis_med_id: {
        type: Number
    },
    medmis_status: {
        type: String,
        enum: ['true', 'false']
    },
    medmis_dateAdded: {
        type: String
    },
    medmis_dateUpdated: {
        type: String
    }

})

module.exports = model('Medicinemissed', medicineMissedSchema)