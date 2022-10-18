const createHttpError = require('http-errors')
const patientsCollection = require('../models/patientSchema')
const { isValid } = require('../utils/validations')

const addPatient = async (req, res, next) => {

    try {

        if (!req.user) {
            throw createHttpError(401, `Please Login First`)
        }

        let {

            age,
            height,
            width,
            name,
            bloodGroup,
            causes,
            simptoms,
            profession,
            gender,
            dateTime,
            dob,
            address,
            contactDetails,
            status

        } = req.body

        if (!age || Number(age) === NaN) {
            throw createHttpError(400, `please provide a valid age`)
        }

        if (!height || isValid(height)) {
            throw createHttpError(400, `please provide a valid height`)
        }

        if (!width || !isValid(width)) {
            throw createHttpError(400, `please provide a valid width`)
        }

        if (!name || !isValid(name)) {
            throw createHttpError(400, `please provide a valid name`)
        }

        if (!bloodGroup || !isValid(bloodGroup)) {
            throw createHttpError(400, `please provide a valid bloodGroup`)
        }

        if (!causes || !isValid(causes)) {
            throw createHttpError(400, `please provide a valid causes`)
        }

        if (!width || !isValid(width)) {
            throw createHttpError(400, `please provide a valid width`)
        }

        if (!simptoms || !isValid(age)) {
            throw createHttpError(400, `please provide a valid simptoms`)
        }
        if (!profession || !isValid(profession)) {
            throw createHttpError(400, `please provide a valid profession`)
        }

        if (!gender || !isValid(gender)) {
            throw createHttpError(400, `please provide a valid gender`)
        }

        if (!simptoms || !isValid(age)) {
            throw createHttpError(400, `please provide a valid simptoms`)
        }

        if (!address || !isValid(address)) {
            throw createHttpError(400, `please provide a valid address`)
        }

        if (!contactDetails || !isValid(contactDetails)) {
            throw createHttpError(400, `please provide a valid contactDetails`)
        }

        let newRecord = await patientsCollection.create(req.body)
        
        res.status(201)
        res.json({
            error: false,
            message: `new Record Added Successfully`,
            newRecord
        })

    } catch (error) {
        next(error)
    }

}

module.exports = {
    addPatient
}