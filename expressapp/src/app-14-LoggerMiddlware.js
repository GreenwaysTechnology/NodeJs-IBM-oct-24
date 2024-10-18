const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const PORT = process.env.PORT || 3000

const app = express()
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use(bodyParser.json())
//console log
// app.use(morgan('combined'))
app.use(morgan('combined', { stream: accessLogStream }))


app.use('/api/customers', require('./routers/customer.router'))

//index
app.get('/', (req, res) => {
    res.end('Hello Express')
})
//start server
const server = app.listen(PORT, () => {
    console.log(`Express Web Server is running at ${server.address().port}`)
})


