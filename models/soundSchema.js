const { Schema, model } = require('mongoose')


const soundSchema = new Schema({


    id: {

        type: Number,
        required: true

    },

    soundId: {

        type: Number,
        required: true,
        trim: true,
        lowercase: true

    },

    userId: {
        type: Number
    },

    rngToneValLevel : {

        type : String,
        enum : ['Silent', 'Vibrate', 'Ringing']

    },

    dateCreated: {
        type: String
    },

    dateUpdated: {
        type: String
    }

})

module.exports = model('Sound', soundSchema)