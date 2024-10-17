const express = require('express')
const app = express()
require('dotenv').config()
//const customerRouter = require('./routers/customer.router')

const PORT = process.env.PORT || 3000

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


