const express = require('express')
const app = express()

const { findAll } = require('./services/customer.service')

const PORT = 3000

//index
app.get('/', (req, res) => {
    res.end('Hello Express')
})
//Resource: Customer
app.get('/api/customers', async (req, res) => {
    try {
        const customers = await findAll()
        //return json 
        res.status(200).json(customers)
    }
    catch (err) {
        res.status(500).json({ err: err })
    }
})

//start server
const server = app.listen(PORT, () => {
    console.log(`Express Web Server is running at ${server.address().port}`)
})


