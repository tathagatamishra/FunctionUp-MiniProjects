const express = require('express')

const router = express.Router()

const {bookSlot} = require('../controller/slotctrl')


router.post ("/register",             )

router.post ("/login",                )

router.get  ("/userdetails",          )

router.get  ('/findtimeslots',        )

router.post ('/booktimeslot', bookSlot)

router.put  ('/updatetimeslot',       )

router.get  ("/admin/userdetails",    )

router.post ('/admin/createslots',    )

router.get  ("/admin/timeslot",       )


module.exports = router