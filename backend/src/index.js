const express = require('express')
const router = require('./route/route')

const app = express()

app.use('/', router)



const port = 6969
app.listen(port, () => console.log(`backend server is 🏃 on port ${port}`))