

const user = require('../models/usersSchema')

const { isValid, isValidEmail, isValidObjectId, isValidPhone } = require('../utils/validations')

const register = async (req, res, next) => {

    try {

        if (Object.keys(req.body).length == 0) {
            throw createError(400, 'request Body should not be empty')
        }

        let {

            firstName,
            lastName,
            email,
            phone,
            disease,
            password,
            hospital,
            doctor

        } = req.body

        /*                                      validations                                        */

        if (!isValid(firstName)) {
            throw createError(400, 'please Enter a Valid First Name')
        }

        if (!isValid(lastName)) {
            throw createError(400, 'please Enter a Valid Last Name')
        }

        if (!isValid(email) || !isValidEmail(email)) {
            throw createError(400, 'Email is Required And should be a Valid Email id')
        }


        const isEmailInUse = await user.findOne({ email: email })

        if (isEmailInUse) {
            throw createError(409, `${email} is Already In use`)
        }

        if (!isValidPhone(phone) || !isValid(phone)) {
            throw createError(400, 'phone number is required and should be a valid Phone number')
        }

        const isPhoneInUse = await user.findOne({ phone: phone })
        if (isPhoneInUse) {
            throw createError(409, `${phone} is Already In Use`)
        }


        if (!isValid(disease)) {
            throw createError(400, 'please Enter a Valid First Name')
        }


        if (!isValid(doctor)) {
            throw createError(400, 'please Enter a Valid doctor id')
        }

        if (!isValidObjectId(doctor)) {
            throw createError(400, 'please Enter a Valid doctor id')
        }

        if (!isValid(hospital)) {
            throw createError(400, 'please Enter a Valid hospital id')
        }

        if (!isValidObjectId(hospital)) {
            throw createError(400, 'please Enter a Valid hospital id')
        }

        if (!isValid(password)) {
            throw createError(400, 'invalid input ->>> password')
        }

        password = await hash(password, 10)

        let newdata = await user.create({

            firstName,
            lastName,
            disease,
            phone,
            password,
            hospital,
            doctor

        })

        res.status(201).json(newdata)
        return

    } catch (error) {
        next(error)
    }
}

module.exports = {
    register
}