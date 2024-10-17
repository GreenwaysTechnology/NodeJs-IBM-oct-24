const express = require('express')
const { findAll, save } = require('../services/customer.service')

const customerRouter = express.Router()

//end point and apis

customerRouter.get('/', async (req, res) => {
    try {
        const customers = await findAll()
        return res.status(200).json(customers)
    }
    catch (err) {
        return res.status(500).json({ err })
    }
})
customerRouter.get('/filter', async (req, res) => {
    try {
        // const params = req.query
        // console.log(params)
        // return res.status(200).json({ message: params })
        const { city, state } = req.query
        return res.status(200).json({ city, state })
    }
    catch (err) {
        return res.status(500).json({ err })
    }
})
customerRouter.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        return res.status(200).json({ message: id })
    }
    catch (err) {
        return res.status(500).json({ err })
    }
})


customerRouter.post('/', async (req, res) => {
    try {
        let data = ''
        req.on('data', (chunk) => {
            data += chunk
        })
        req.on('end', async () => {
            const response = await save(JSON.parse(data))
            return res.status(201).json({ message: response })
        })
    }
    catch (err) {
        return res.status(500).json({ err })
    }
})
customerRouter.put('/', async (req, res) => {
    try {
        return res.status(200).json({ message: 'put' })
    }
    catch (err) {
        return res.status(500).json({ err })
    }
})

customerRouter.delete('/', async (req, res) => {
    try {
        return res.status(200).json({ message: 'delete' })
    }
    catch (err) {
        return res.status(500).json({ err })
    }
})

module.exports = customerRouter