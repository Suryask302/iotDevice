const { Schema, model } = require('mongoose')
const { ObjectId } = Schema.Types

const userSchema = new Schema({

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

    phone: {

        type: String,
        required: true

    },

    password: {

        type: String,
        required: true

    },

    disease: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },

    hospital: {

        type: ObjectId,
        ref: 'Hospitals'

    },

    doctor: {

        type: ObjectId,
        ref: 'Doctors'

    }


})

module.exports = model('user', userSchema)