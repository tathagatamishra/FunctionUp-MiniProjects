const express = require('express')
const multer = require('multer')
const mongoose = require('mongoose')

const route = require('./route/route')

const app = express()

app.use(express.json())
app.use(multer().any())


mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://new_user:jk1BBWwmxQpZ31zO@cluster0.pxvwsjp.mongodb.net/MiniProject3')
.then(() => console.log('MDB is connected'))
.catch(err => console.log(err))


app.use('/', route)

app.listen(3000, console.log('Server is running'))