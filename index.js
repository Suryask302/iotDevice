require('dotenv').config()
const express = require("express")
const app = express()
const port = 3000
const morgan = require('morgan')
const passport = require('passport')
const cookieSession = require('cookie-session')
require('./utils/passport-setup')

// require('./db/connect')
const { notFound, errorHandler } = require('./utils/errors')
// const route = require('./routes/userRoutes')
const authRoute = require('./routes/auth')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use(
	cookieSession({
		name: "session",
		keys: ["suryasK"],
		maxAge: 24 * 60 * 60 * 100,
	})
)

app.use(passport.initialize());
app.use(passport.session());


// app.use('/', route)
app.use('/', authRoute)
app.use(notFound)
app.use(errorHandler)

app.listen(port, _ => console.log('server is up and running'))





