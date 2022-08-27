const router = require('express').Router()
const Contract = require('../model/Contract')

router.get('/', async(req, res) => {
    try {
        const posts = await Contract.find()
        res.json(posts)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/:postId', async (req, res) => {
    try {
        const posts = await Contract.findById(req.params.postId)
        res.json(posts)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router