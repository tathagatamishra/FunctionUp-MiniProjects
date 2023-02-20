const express = require('express')
const mongoose = require('mongoose')
const route = require('./routes/route')

const app = express()

app.use(express.json())

app.use('/', route)

app.listen(3000, ()=>console.log('server is running on 3000'))