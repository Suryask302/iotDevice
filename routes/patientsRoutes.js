const router = require('express').Router()

const { addPatient } = require('../controllers/patientsController')

router
    .post('/addpatient', addPatient)

module.exports = router