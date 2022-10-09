const { Schema, model } = require('mongoose')


const medicineMissedSchema = new Schema({


    id: {

        type: Number,
        required: true

    },

    medicineMissed: {
        type: Number
    }

})

module.exports = model('Medicinemissed', medicineMissedSchema)