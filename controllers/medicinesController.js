const createHttpError = require('http-errors')
const medicines = require('../models/medicineModal')
const { isValid } = require('../utils/validations')


const addMedicine = async (req, res, next) => {

    try {

        if (!req.user) {
            throw createHttpError(401, `please login first`)
        }

        const {

            medicineId,
            medicineName,
            compartment,
            colors,
            medicineType,
            frequencyDays,
            doseCounts,
            repeatStatus,
            repeatDose

        } = req.body

        if (!medicineId || !Number(medicineId)) {
            throw createHttpError(400, `id is required`)
        }

        if (!medicineName || !isValid(medicineName)) {
            throw createHttpError(400, `medicineName is required`)
        }

        if (!compartment || !isValid(compartment)) {
            throw createHttpError(400, `compartment is required`)
        }

        if (!colors || !isValid(colors)) {
            throw createHttpError(400, `colors is required`)
        }

        if (!medicineType || !isValid(medicineType)) {
            throw createHttpError(400, `medicineType is required`)
        }

        if (!frequencyDays || !isValid(frequencyDays)) {
            throw createHttpError(400, `frequencyDays is required`)
        }

        if (!doseCounts || !isValid(doseCounts)) {
            throw createHttpError(400, `doseCounts is required`)
        }

        if (!repeatStatus || !isValid(repeatStatus)) {
            throw createHttpError(400, `repeatStatus is required`)
        }

        if (!repeatDose || !isValid(repeatDose)) {
            throw createHttpError(400, `repeatDose is required`)
        }

        let finalData = {
            id: await medicines.find().count() + 1,
            ...req.body
        }

        let newRecord = await medicines.create(finalData)

        res.status(201)
        res.json({
            error: false,
            message: `new record added SuccessFully`,
            newRecord
        })

    } catch (error) {
        next(error)
    }

}

module.exports = {
    addMedicine
}