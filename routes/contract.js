const router = require('express').Router()
const Contract = require('../model/Contract')

router.post('/', async (req, res) => {

    const post = new Contract({
        question: req.body.question,
        answer: req.body.answer
    })
    try {
        const contractReq = await post.save()
        res.send(contractReq)
    } catch (error) {
        res.status(400).send(error)
    }

})

module.exports = router