const router = require('express').Router()
const ContractComment = require('../model/Clcomment')

router.get('/', async(req, res) => {
    try {
        const posts = await ContractComment.find()
        res.json(posts)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router