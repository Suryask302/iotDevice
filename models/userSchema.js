
const { Schema, model } = require('mongoose')
const { ObjectId } = Schema.Types

const userSchema = new Schema({

    user_id: {
        type: Number,
        required: true,
    },
    user_roll: {
        type: Number,
        required: true,
    },
    user_own_id: {
        type: Number,
        required: true,
    },
    user_email: {
        type: String
    },

    user_password: {
        type: String
    },
    user_last_seen: {
        type: String
    },
    user_name: {
        type: String
    },
    user_permission: {
        type: String
    },
    user_status: {
        type: String,
        enum: ['true', 'false']
    },
    user_dateAdded: {
        type: String
    },
    user_dateUpdated: {
        type: String
    }
})

module.exports = model('CareTaker_Aligned', userSchema)
