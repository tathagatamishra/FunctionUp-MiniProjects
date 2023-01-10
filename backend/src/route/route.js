const express = require('express')
const router = express.Router()


const { createBook, findBook, updateBook } = require('../controller/bookctrl')
const { signUp, logIn, edit, view } = require('../controller/userCtrl')


router.post ('/signup'    ,   signUp     )
router.post ('/login'     ,   logIn      )
router.get  ('/view'      ,   view       )
router.put  ('/edit'      ,   edit       )

router.post ('/createbook',   createBook )
router.get  ('/findbook'  ,   findBook   )
router.put  ('/updatebook',   updateBook )


module.exports = router