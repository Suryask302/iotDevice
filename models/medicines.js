const { Schema, model } = require('mongoose')
const { ObjectId } = Schema.Types

const medicinesSchema = new Schema({

    user: {
        type: ObjectId,
        ref: 'Users'
    },

    name: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },

    doses: {

        type: Number,
        required: true,

    },

    timeOfDoses: ['String']


})

module.exports = model('medicine', medicinesSchema)