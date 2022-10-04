require('dotenv').config()
const express = require("express")
const app = express()
const port = 3000
const morgan = require('morgan')

require('./db/connect')
const { notFound, errorHandler } = require('./utils/errors')
const route = require('./routes/userRoutes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))


app.use('/', route)

app.use(notFound)
app.use(errorHandler)

app.listen(port, _ => console.log('server is up and running'))





