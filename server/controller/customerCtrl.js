let crypto = require('crypto')
const customerModel = require('../models/customerModel')

exports.getCustomer = async (req, res) => {
    try {

        let customers = await customerModel.find({status: 'ACTIVE'}).select({_id: 0, __v: 0})

        res.status(200).send({ status: true, data: customers })
    }
    catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

exports.deleteCustomer = async (req, res) => {
    try {

        let ID = req.query.customerID

        let user = await customerModel.findOne({customerID: ID})

        if (!user) return res.status(404).send({ status: false, message: 'User not found' })

        await customerModel.deleteOne({customerID: ID})

        res.status(200).send({ status: true, message: 'Your account deleted successfully' })
    }
    catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

exports.createCustomer = async (req, res) => {
    try {

        let {firstName, lastName, mobileNumber, DOB, emailID, address, status} = req.body

        req.body.customerID = crypto.randomUUID()

        if (!firstName) return res.status(400).send({ status: false, message: 'Enter your first name' })
        if (!lastName) return res.status(400).send({ status: false, message: 'Enter your last name' })

        if (!mobileNumber) return res.status(400).send({ status: false, message: 'Enter your mobile number' })

        if (!DOB) return res.status(400).send({ status: false, message: 'Enter your date of birth' })
        
        if (!emailID) return res.status(400).send({ status: false, message: 'Enter your email id' })
        

        let unique = await customerModel.findOne({ $or: [{ emailID: emailID }, { mobileNumber: mobileNumber }] })
        if (unique) {
            if (unique.mobileNumber == mobileNumber) return res.status(400).send({ status: false, message: "This mobile number is already taken 😕" })
            if (unique.emailID == emailID) return res.status(400).send({ status: false, message: "This email is already taken 😕" })
        }

        
        if (!address) return res.status(400).send({ status: false, message: 'Enter your address' })
        if (!status) return res.status(400).send({ status: false, message: 'Enter your account status' })


        let customer = await customerModel.create(req.body)

        return res.status(200).send({ status: true, data: customer })
    }
    catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}