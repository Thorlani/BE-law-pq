const router = require('express').Router()
const LegalComment = require('../model/Clcomment')

router.get('/', async(req, res) => {
    try {
        const posts = await LegalComment.find()
        res.json(posts)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router