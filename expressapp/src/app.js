require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')

const corsOptions = {
    origin: 'http://www.abce.com'
}

const PORT = process.env.PORT || 3000
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

//enabled default cors
app.use(cors(corsOptions))
app.use(bodyParser.json())

app.use(morgan('combined', { stream: accessLogStream }))
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    res.end('Home Page')
})

app.get('/api/customers/:id', (req, res, next) => {
    res.json({ msg: 'cors enabled for only this particular' })
})

//start server
const server = app.listen(PORT, () => {
    console.log(server.address())
    console.log(`Express is running @ ${server.address().port}`)
})