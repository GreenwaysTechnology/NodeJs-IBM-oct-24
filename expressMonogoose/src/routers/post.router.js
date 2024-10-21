const express = require('express')
const PostRouter = express.Router()
const { findAll, save, findById,update,remove } = require('../services/Post.service')

PostRouter.get('/', async (req, res) => {
    try {
        const posts = await findAll()
        res.json(posts)
    }
    catch (err) {
        res.status(400).json({ err })
    }

})
PostRouter.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const post = await findById(id)
        if (post) {
            res.json(post)
        } else {
            res.status(404).json({ err: "Post does exits" })
        }

    }
    catch (err) {
        res.status(404).json({ err: "Post does exits" })
    }

})
PostRouter.post('/', async (req, res) => {
    const post = req.body
    try {
        const savedPost = await save(post)
        res.status(201).json(savedPost)
    }
    catch (err) {
        res.status(400).json({ err })
    }

})
PostRouter.put('/:id', async (req, res) => {
    const id = req.params.id
    const postInput = req.body
    try {
        const post = await update(id, postInput)
        res.json(post)
    }
    catch (err) {
        res.status(404).json({ err: "Post does exits" })
    }

})
PostRouter.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        await remove(id)
        res.status(204).send()
    }
    catch (err) {
        res.status(404).json({ err: "Post does exits" })
    }

})
module.exports = PostRouter