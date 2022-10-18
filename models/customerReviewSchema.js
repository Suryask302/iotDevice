const { Schema, model } = require('mongoose')


const custReviewSchema = new Schema({


    cr_id: {
        type: Number,
        required: true
    },

    cr_name: {

        type: String,
        required: true

    },

    cr_rating: {
        type: Number
    },

    cr_msg: {

        type: String,
        required: true

    },

  
    cr_status: {
        type: String,
        enum: ['true', 'false']
    },
    cr_dateAdded: {
        type: String
    },
    cr_dateUpdated: {
        type: String
    }

})

module.exports = model('Custreview', custReviewSchema)