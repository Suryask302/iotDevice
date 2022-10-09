const { Schema, model } = require('mongoose')
const { ObjectId } = Schema.Types

const careTakerAlignedSchema = new Schema({


    id: {

        type: Number,
        required: true

    },

    doctorStatus: {

        type: String,
        enum : ['Active', 'Inactive']
        
    },

    dateAdded: {
        type: String
    },

    dateUpdated: {
        type: String
    }


})

module.exports = model('CareTaker_Aligned', careTakerAlignedSchema)