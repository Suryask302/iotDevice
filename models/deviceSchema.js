const { Schema, model } = require('mongoose')


const deviceSchema = new Schema({


    id: {
        type: Number,
        required: true
    },


    deviceId: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },

    connectedTime: {

        type: String,
        required: true,

    },

    disconnectedTime: {
        type: String,
        required: true,

    },

    contact: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },

    deviceType : {

        type: String,
        required: true,
        enum : ['Bluetooth', 'Wifi']

    }

 


})

module.exports = model('Device', deviceSchema)