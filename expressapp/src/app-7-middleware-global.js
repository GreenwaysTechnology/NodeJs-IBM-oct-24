const express = require('express')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 3000

//middleware
app.use((req, res, next) => {
    //middleware code
    console.log('middleware is called')
    res.set({ 'secret': '222232ssfsfsdf' })
    next() //this is required
})

//route
app.get('/hello', (req, res) => {
    res.end('hello')
})

app.get('/hai', (req, res) => {
    res.end('hai')
})
//start server
const server = app.listen(PORT, () => {
    console.log(`Express Web Server is running at ${server.address().port}`)
})


