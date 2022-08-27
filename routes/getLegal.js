const router = require('express').Router()
const Legal = require('../model/Legal')

router.get('/', async(req, res) => {
    try {
        const posts = await Legal.find()
        res.json(posts)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router