const express = require("express");
const mongoose = require("mongoose");

const app = express()

const router = require('./route/route')

app.use(express.json())

app.use('/', router)


app.listen(3000, () => {console.log('server running')})