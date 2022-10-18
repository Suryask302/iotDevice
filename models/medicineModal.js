const { Schema, model } = require('mongoose')


const medicineSchema = new Schema({


    med_id: {

        type: Number,
        required: true

    },
   

    med_name: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },

    med_compartment: {

        type: String,
        required: true,
        trim: true,
        lowercase: true

    },

    med_colors: {

        type: String,
        required: true,
        enum: ['Red', 'Green', 'Blue', "Black"]

    },

    med_type: {

        type: String,
        enum: ['Capsule', 'Tablet', 'Liquid', 'Eyedrop']

    },

    med_frequency_days: {

        type: String,
        enum: ['oneDayGap', 'twoDayGap', 'everyDay']

    },

   med_dose_counts: {
        type: String,
        enum: ['dose1', 'dose2', 'dose3']
    },
    med_time: {
        type: String,
        enum: ['befor', 'after', '']
        // time arreay 

    },
    med_repeatStatus: {
        type: String,
        enum: ['Mute', 'Unmute']
    },
    // med_sound_setting: {
    //     type: String,
    //     enum: ['ring', 'vibrate']
    // },
    // med_volume: {
    //     type: number,
    // },
    med_repeatDose: {
        type: String,
        enum: ['doesNotRepeat', 'every5Minutes', 'every10Minutes', 'every20Minutes', 'every30Minutes']
    },

    med_status: {
        type: String,
        enum: ['true', 'false']
    },
    med_dateAdded: {
        type: String
    },
    med_dateUpdated: {
        type: String
    }


}, { timestamps: true })

module.exports = model('Medicine', medicineSchema)