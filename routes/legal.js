const router = require('express').Router()
const Legal = require('../model/Legal')

router.post('/', async(req, res) => {

    const post = new Legal({
        question: req.body.question,
        answer: req.body.answer
    })
    try {
        const legalReq = await post.save()
        res.send(legalReq)
    } catch (error) {
        res.status(400).send(error)
    }

})

module.exports = router