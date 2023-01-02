const express = require('express')

const router = express.Router()

const {login,getUser,bookSlot} = require('../controller/slotctrl')


router.post ('/register',          createUser)
router.post ('/login',                  login)
router.get  ('/userdetails',          getUser)
router.get  ('/findtimeslots',               )
router.post ('/booktimeslot',        bookSlot)
router.put  ('/updatetimeslot',              )
router.get  ('/admin/userdetails', filterUser)
router.post ('/admin/createslots',           )
router.get  ('/admin/timeslot',              )


module.exports = router