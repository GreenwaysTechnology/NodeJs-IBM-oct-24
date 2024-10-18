const express = require('express')
const HelloRouter = express.Router()

//middleware //any method(get|post|put|delete) or url
HelloRouter.use((req, res, next) => {
    console.log('Hello Router is called')
    next();
})


HelloRouter.get('/', (req, res) => {
    res.json({ message: 'Hello' })
})


module.exports = HelloRouter