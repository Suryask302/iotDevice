const { Schema, model } = require('mongoose')


const soundSchema = new Schema({


    soun_id: {

        type: Number,
        required: true

    },


    soun_userid: {
        type: Number
    },

    soun_type : {

        type : String,
        enum : ['Silent', 'Vibrate', 'Ringing']

    },
    soun_leval: {
        type : number,

    },

    soun_ring: {
        type : string,

    },

    soun_status: {
        type: String,
        enum: ['true', 'false']
    },
    soun_dateAdded: {
        type: String
    },
    soun_dateUpdated: {
        type: String
    }

})

module.exports = model('Sound', soundSchema)