const router = require('express').Router()

const { addMedicine } = require('../controllers/medicinesController')

router
    .post('/addmedicines', addMedicine)

module.exports = router