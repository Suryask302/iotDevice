const { Schema, model } = require('mongoose')


const custReviewSchema = new Schema({


    id: {

        type: Number,
        required: true

    },

    name: {

        type: String,
        required: true

    },

    rating: {
        type: Number
    },

    message: {

        type: String,
        required: true

    },

    createdAt: {
        type: String,

    },
    
    updatedAt: {
        type: String,

    }

})

module.exports = model('Custreview', custReviewSchema)