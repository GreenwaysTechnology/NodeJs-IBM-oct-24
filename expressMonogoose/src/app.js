require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3000

//connecting to mongodb
async function connectToDb() {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("Mongo is connected")

        //if you want to start the web only after database is connected
        // const server = app.listen(PORT, () => {
        //     console.log(server.address())
        //     console.log(`Express is running @ ${server.address().port}`)
        // })
    }
    catch (err) {
        console.log('Database connection failed')
        console.log(err)
    }
}
connectToDb()

app.use(bodyParser.json())

app.use('/api/posts', require('./routers/post.router'))

app.get('/', (req, res) => {
    res.json({ message: 'Mongodb' })
})

const server = app.listen(PORT, () => {
    console.log(server.address())
    console.log(`Express is running @ ${server.address().port}`)
})

