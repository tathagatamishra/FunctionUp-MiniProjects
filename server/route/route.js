const express = require('express')

const router = express.Router()


const {getCustomer, deleteCustomer, createCustomer} = require('../controller/customerCtrl')

//todo Customer API ---

router.get   ('/alluser', getCustomer)
router.delete('/delete', deleteCustomer)
router.post  ('/register', createCustomer)



//todo Card API ---

router.get   ('/',)
router.post  ('/',)


module.exports = router