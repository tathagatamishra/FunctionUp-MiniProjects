const mongoose = require('mongoose')

module.exports = mongoose.model(

    'customer',

    mongoose.Schema({

        firstName: {
            type: String,
            trim: true
        },
        lastName: {
            type: String,
            trim: true
        },
        mobileNumber: {
            type: String,
            trim: true
        },
        DOB: {
            type: String,
            trim: true
        },
        emailID: {
            type: String,
            trim: true
        },
        address: {
            type: String,
            trim: true
        },
        customerID: {
            type: String,
            trim: true
        },
        status: {
            type: String,
            enum: ['ACTIVE', 'INACTIVE']
        }

    })
)