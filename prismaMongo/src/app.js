const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
const { PrismaClient } = require('@prisma/client')


app.use(bodyParser.json())

const prisma = new PrismaClient()

//for simplicity ; i am not creating routers,service layer; you can /should do when 
//write your app.

app.get('/api/posts', async(req, res) => {
    //read from mongo
    try {
        const posts = await prisma.post.findMany()
        res.json(posts)
    }
    catch (err) {
        console.log(err)
        res.json({ err })
    }
})
app.post('/api/posts', async (req, res) => {
    const input = req.body
    try {
        const post = await prisma.post.create({
            data: {
                title: input.title,
                content: input.content
            }
        })
        res.json(post)
    }
    catch (err) {
        console.log(err)
        res.json({ err })
    }
})


const server = app.listen(PORT, () => {
    console.log(server.address())
    console.log(`Express is running @ ${server.address().port}`)
})