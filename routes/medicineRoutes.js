const router = require('express').Router()

const { addMedicine, getMedByFilter, updateMedicineById, getAllMedCollections } = require('../controllers/medicinesController')

router
    .post('/addmedicines', addMedicine)
    .get('/getMedByFilter', getMedByFilter)
    .put('/updateMedicine', updateMedicineById)
    .get('/getAllMed', getAllMedCollections)

module.exports = router