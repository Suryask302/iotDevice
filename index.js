require('dotenv').config()
const express = require("express")
const app = express()
const port = 4000
const morgan = require('morgan')
const passport = require('passport')
const cookieSession = require('cookie-session')
require('./utils/passport-setup')
require('./db/connect')
const { notFound, errorHandler } = require('./utils/errors')

const authRoute = require('./routes/auth')
const medRoutes = require('./routes/medicineRoutes')
const patientRoutes = require('./routes/patientsRoutes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use(
	cookieSession({

		name: "session",
		keys: ["suryasK"],
		maxAge: 24 * 60 * 60 * 100

	})
)

app.use(passport.initialize());
app.use(passport.session());

app.use('/', medRoutes)
app.use('/', authRoute)
app.use('/', patientRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, _ => console.log('server is up and running'))





