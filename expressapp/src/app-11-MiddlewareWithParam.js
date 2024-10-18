const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 3000

//parametermized middleware
const MyMiddleware = function (param) {
    return function (req, res, next) {
        //handle params here and do something with params
        console.log(param)
        next()
    }
}

app.use((req, res, next) => {
    res.set('companyName', 'IBM')
    next()
})
app.use(MyMiddleware('MyParam'))

app.get('/hello', (req, res) => {
    res.end('hello')
})

//start server
const server = app.listen(PORT, () => {
    console.log(`Express Web Server is running at ${server.address().port}`)
})


