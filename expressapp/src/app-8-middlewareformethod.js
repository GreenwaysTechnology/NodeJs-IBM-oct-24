const express = require('express')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 3000

//middleware
app.post('/hello',(req, res, next) => {
    res.set({ 'secret': '222232ssfsfsdf' })
    next() //this is required
})

//route
app.get('/hello', (req, res) => {
    res.end('hello get')
})

app.post('/hello', (req, res) => {
    res.end('hello post')
})
//start server
const server = app.listen(PORT, () => {
    console.log(`Express Web Server is running at ${server.address().port}`)
})


