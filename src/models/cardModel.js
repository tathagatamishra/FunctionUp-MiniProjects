const mongoose = require('mongoose')

module.exports = mongoose.model(

    'card',

    mongoose.Schema({

        cardNumber: {
            type: String,
            trim: true
        },
        cardType: {
            type: String,
            enum: ['REGULAR', 'SPECIAL']
        },
        customerName: {
            type: String,
            trim: true
        },
        status: {
            type: String,
            enum: ['ACTIVE', 'INACTIVE'],
            default: 'ACTIVE'
        },
        vision: {
            type: String,
            trim: true
        },
        customerID: {
            type: String,
            ref: 'customer'
        }

    })
)