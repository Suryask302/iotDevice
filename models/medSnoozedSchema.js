const { Schema, model } = require('mongoose')


const medicineSnoozedSchema = new Schema({


    id: {

        type: Number,
        required: true

    },

    medicineSnoozed: {
        type: Number
    }

})

module.exports = model('Medicinesnoozed', medicineSnoozedSchema)