const { Schema, model } = require('mongoose')


const medicineTakenSchema = new Schema({


    id: {

        type: Number,
        required: true

    },

    medicineTaken: {
        type: Number
    }

})

module.exports = model('Medicinetaken', medicineTakenSchema)