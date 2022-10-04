const express = require("express")
const app = express()
const port = 3000
const connect = require('./db/connect')







app.listen(port, _ => console.log('server is up and running'))





