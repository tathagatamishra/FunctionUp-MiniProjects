const userModel = require('../model/userModel')
const adminModel = require('../model/adminModel')
const jwt = require('jsonwebtoken')


exports.createUser = async (req, res) => {
    try {
        let data = req.body
        let register = await userModel.create(data)
        return res.status(201).send({ status: true, message: "You are now registered", details: register })
    } catch (err) {
        return res.status(500).send({ status: false, error: err.message })
    }
}

exports.login = async (req, res) => {
    try {
        let data = req.body
        let { phoneNumber, password } = data
        let admin = req.query

        let _token = (num) => {
            let token = jwt.sign({ phoneNumber: num }, "useless key")
            return token
        }

        if (admin) {
            if (!password) {
                return res.status(400).send({ status: false, message: "password is required" })
            }
            let findAdmin = await adminModel.findOne({ admin: admin, password: password })
            if (!findAdmin) {
                return res.status(400).send({ status: false, message: "Not Authorized for this Operation" })
            }
            return res.status(201).send({ status: true, message: "login successful", token: _token(phoneNumber) })
        }
        if (!admin) {
            if (!phoneNumber) {
                return res.status(400).send({ status: false, message: "Phone Number is required" })
            }
            if (!password) {
                return res.status(400).send({ status: false, message: "password is required" })
            }
            let userExist = await userModel.findOne({ phoneNumber: phoneNumber, password: password })
            if (!userExist) {
                return res.status(404).send({ status: false, message: "phoneNumber and password is incorrect" })
            }
            return res.status(201).send({ status: true, message: "login successful", token: _token(phoneNumber) })
        }
    } catch (err) {
        return res.status(500).send({ status: false, error: err.message })
    }
}


exports.getUser = async (res, res) => {
    try {
        userId = req.params.userId
        let userExist = await userModel.findOne({ _id: userId })
        if (!userExist) {
            return res.status(404).send({ status: false, message: "requested User not Found" })
        }
        return res.status(200).send({ status: false, message: "data fetched Successfully", data: userExist })
    } catch (err) {
        return res.status(500).send({ status: false, error: err.message })
    }
}


exports.filterUser = async (req, res) => {
    try {
        let data = req.query
        let findUser = await userModel.find(...data)
        return res.status(200).send({ status: true, message: "all users", dataCount: findUser.length, data: findUser })
    } catch (err) {
        return res.status(500).send({ status: false, error: err.message })
    }
}