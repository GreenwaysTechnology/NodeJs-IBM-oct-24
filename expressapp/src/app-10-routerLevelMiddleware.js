const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 3000

app.use((req, res, next) => {
    res.set('companyName', 'IBM')
    next()
})
app.use('/hello', require('./routers/hello.router'))
//start server
const server = app.listen(PORT, () => {
    console.log(`Express Web Server is running at ${server.address().port}`)
})


