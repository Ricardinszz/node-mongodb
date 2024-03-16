const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}))

const conn = require('./db/conn')


const routes = require('./db/conn')
app.use('/', routes)

app.listen(3000, function(){
    console.log('Server UP port 3000')
})