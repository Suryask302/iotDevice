const { Schema, model } = require('mongoose')
const { ObjectId } = Schema.Types

const doctorsSchema = new Schema({

    firstName: {

        type: String,
        required: true,
        trim: true,
        lowercase: true
    },

    lastName: {

        type: String,
        required: true,
        trim: true,
        lowercase: true
    },

    email: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },

    specialization: ['String'],

    hospital: {

        type: ObjectId,
        ref: 'Hospitals'

    },

    patients: [

        {
            patientId: ObjectId,
            ref: 'User'
        }

    ]

})

module.exports = model('doctor', doctorsSchema)