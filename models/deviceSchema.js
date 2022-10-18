const { Schema, model } = require('mongoose')


const deviceSchema = new Schema({



    dev_Id: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },
    dev_con_at: {
        type: String,
        required: true,
        //date format

    },

    dev_dcon_at: {
        type: String,
        required: true,

    },
    dev_total_time: {
        type: String,
        required: true,
        // hrs format

    },


    dev_pt_id: {
        type: String,
        required: true,
        trim: true,
        lowercase: true

    },
    dev_Type : {
        type: String,
        required: true,
        enum : ['Bluetooth', 'Wifi']

    },
    dev_status: {
        type: String,
        enum: ['true', 'false']
    },
    dev_dateAdded: {
        type: String
    },
    dev_dateUpdated: {
        type: String
    }

 


})

module.exports = model('Device', deviceSchema)