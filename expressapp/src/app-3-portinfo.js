const express = require('express')
const app = express()

const PORT = 3000

//index
app.get('/', (req, res) => {
    res.end('Hello Express')
})
//Resource: Customer
app.get('/api/customer', (req, res) => {
    res.end('Customer get')
})
app.post('/api/customer', (req, res) => {
    res.end('Customer Post')
})
app.put('/api/customer', (req, res) => {
    res.end('Customer Update')
})
app.delete('/api/customer', (req, res) => {
    res.end('Customer Delete')
})
//start server
const server = app.listen(PORT, () => {
    console.log(`Express Web Server is running at ${server.address().port}`)
})


