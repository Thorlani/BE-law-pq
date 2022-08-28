const router = require('express').Router()
const Constitutional = require('../model/Constitutional')

router.get('/', async(req, res) => {
    try {
        const posts = await Constitutional.find()
        res.json(posts)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/:postId', async (req, res) => {
    try {
        const posts = await Constitutional.findById(req.params.postId)
        res.json(posts)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router