const { mongoose, connect } = require("mongoose")

connect(process.env.DBURI, { useNewUrlParser: true })
    .then(_ => console.log('Mongo db connected'))
    .catch(e => console.log(e))

module.exports = connect