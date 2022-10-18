const createHttpError = require('http-errors')
const medicines = require('../models/medicineModal')
const { isValid } = require('../utils/validations')


const addMedicine = async (req, res, next) => {

    try {

        const {

            med_name,
            med_compartment,
            med_colors,
            med_type,
            med_frequency_days,
            med_dose_counts,
            med_time,
            med_repeatStatus,
            med_repeatDose,
            med_status,
            med_dateAdded,
            med_dateUpdated

        } = req.body

        if (!med_name || !isValid(med_name)) {
            throw createHttpError(400, `medicineName is required`)
        }

        if (!med_compartment || !isValid(med_compartment)) {
            throw createHttpError(400, `compartment is required`)
        }

        if (!med_colors || !isValid(med_colors)) {
            throw createHttpError(400, `colors is required`)
        }

        if (!med_type || !isValid(med_type)) {
            throw createHttpError(400, `medicineType is required`)
        }

        if (!med_frequency_days || !isValid(med_frequency_days)) {
            throw createHttpError(400, `frequencyDays is required`)
        }

        if (!med_dose_counts || !isValid(med_dose_counts)) {
            throw createHttpError(400, `doseCounts is required`)
        }

        if (!med_time || !isValid(med_time)) {
            throw createHttpError(400, `repeatStatus is required`)
        }

        // if (!med_repeatStatus || !isValid(med_repeatStatus)) {
        //     throw createHttpError(400, `repeatDose is required`)
        // }

        let finalData = {
            med_id: await medicines.find().count() + 1,
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

//this is for searching document with given filter

const getMedByFilter = async (req, res, next) => {

    try {

        let {

            med_id,
            med_name,
            med_compartment,
            med_colors,
            med_type,
            med_frequency_days,
            med_dose_counts,
            med_time,
            med_repeatStatus,
            med_repeatDose,
            med_status,

        } = req.query

        let filters = {

        }

        if ('med_id' in req.query) {
            filters['med_id'] = med_id
        }

        if ('med_name' in req.query) {
            filters['med_name'] = med_name
        }

        if ('med_compartment' in req.query) {
            filters['med_compartment'] = med_compartment
        }

        if ('med_colors' in req.query) {
            filters['med_colors'] = med_colors
        }

        if ('med_type' in req.query) {
            filters['med_type'] = med_type
        }

        if ('med_frequency_days' in req.query) {
            filters['med_frequency_days'] = med_frequency_days
        }

        if ('med_dose_counts' in req.query) {
            filters['med_dose_counts'] = med_dose_counts
        }

        if ('med_repeatStatus' in req.query) {
            filters['med_repeatStatus'] = med_repeatStatus
        }

        if ('med_frequency_days' in req.query) {
            filters['med_frequency_days'] = med_frequency_days
        }

        if ('med_dose_counts' in req.query) {
            filters['med_dose_counts'] = med_dose_counts
        }

        if ('med_repeatDose' in req.query) {
            filters['med_repeatDose'] = med_repeatDose
        }

        if ('med_time' in req.query) {
            filters['med_time'] = med_time
        }

        if ('med_status' in req.query) {
            filters['med_status'] = med_status
        }

        const filterdDocuments = await medicines.find(filters)

        if (filterdDocuments.length === 0) {
            return res.status(404).send({
                status: false,
                message: 'Invalid Filter'
            })
        }

        return res.status(200).send({ status: false, message: `success`, filterdDocuments })


    } catch (error) {
        next(error)
    }

}


//this is for update document with id

const updateMedicineById = async (req, res, next) => {

    try {

        let {

            med_id,
            med_name,
            med_compartment,
            med_colors,
            med_type,
            med_frequency_days,
            med_dose_counts,
            med_time,
            med_repeatStatus,
            med_repeatDose,
            med_status

        } = req.body

        let updateQuery = {}

        if (req.body.hasOwnProperty('med_name')) {

            if (!Object.prototype.hasOwnProperty.call(updateQuery, '$set')) {
                updateQuery['$set'] = {}
            }

            updateQuery['$set']['med_name'] = med_name.trim()

        }

        if (req.body.hasOwnProperty('med_compartment')) {

            if (!Object.prototype.hasOwnProperty.call(updateQuery, '$set')) {
                updateQuery['$set'] = {}
            }

            updateQuery['$set']['med_compartment'] = med_compartment.trim()

        }

        if (req.body.hasOwnProperty('med_colors')) {

            if (!Object.prototype.hasOwnProperty.call(updateQuery, '$set')) {
                updateQuery['$set'] = {}
            }

            updateQuery['$set']['med_colors'] = med_colors

        }

        if (req.body.hasOwnProperty('med_type')) {

            if (!Object.prototype.hasOwnProperty.call(updateQuery, '$set')) {
                updateQuery['$set'] = {}
            }

            updateQuery['$set']['med_type'] = med_type

        }

        if (req.body.hasOwnProperty('med_frequency_days')) {

            if (!Object.prototype.hasOwnProperty.call(updateQuery, '$set')) {
                updateQuery['$set'] = {}
            }

            updateQuery['$set']['med_frequency_days'] = med_frequency_days

        }

        if (req.body.hasOwnProperty('med_dose_counts')) {

            if (!Object.prototype.hasOwnProperty.call(updateQuery, '$set')) {
                updateQuery['$set'] = {}
            }

            updateQuery['$set']['med_dose_counts'] = med_dose_counts

        }

        if (req.body.hasOwnProperty('med_time')) {

            if (!Object.prototype.hasOwnProperty.call(updateQuery, '$set')) {
                updateQuery['$set'] = {}
            }

            updateQuery['$set']['med_time'] = med_time

        }

        if (req.body.hasOwnProperty('med_repeatStatus')) {

            if (!Object.prototype.hasOwnProperty.call(updateQuery, '$set')) {
                updateQuery['$set'] = {}
            }

            updateQuery['$set']['med_repeatStatus'] = med_repeatStatus

        }

        if (req.body.hasOwnProperty('med_repeatDose')) {

            if (!Object.prototype.hasOwnProperty.call(updateQuery, '$set')) {
                updateQuery['$set'] = {}
            }

            updateQuery['$set']['med_repeatDose'] = med_repeatDose

        }

        const updatedDocument = await medicines.findOneAndUpdate({ med_id }, updateQuery, { new: true })

        if (!updatedDocument) {
            return res.status(400).send({ status: false, message: `unable To update document` })
        }

        return res.status(201).send({
            status: true,
            message: `Successfully Updated Document`,
            updatedDocument
        })

    } catch (error) {
        next(error)
    }

}

// this is for fetching all medicines

const getAllMedCollections = async (req, res, next) => {

    try {

        if(!req.user) {
            res.send('please login first')
        }

        let allDocuments = await medicines.find()
        
        return res.status(200).send({
            status: true,
            data: allDocuments
        })

    } catch (error) {
        next(error)
    }

}

module.exports = {

    addMedicine,
    getAllMedCollections,
    updateMedicineById,
    getMedByFilter
    
}