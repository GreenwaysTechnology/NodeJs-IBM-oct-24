const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3000
const app = express()

//global and third party middlewares registration should go here.
//parse application/json
app.use(bodyParser.json())


//register router with app object
// app.use('/api/customers',customerRouter)
app.use('/api/customers', require('./routers/customer.router'))

//index
app.get('/', (req, res) => {
    res.end('Hello Express')
})
//start server
const server = app.listen(PORT, () => {
    console.log(`Express Web Server is running at ${server.address().port}`)
})


