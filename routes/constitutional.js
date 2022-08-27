const router = require('express').Router()
const Constitutional = require('../model/Constitutional')

router.post('/', async(req, res) => {

    const post = new Constitutional({
        question: req.body.question,
        answer: req.body.answer
    })
    try {
        const constitutionalReq = await post.save()
        res.send(constitutionalReq)
    } catch (error) {
        res.status(400).send(error)
    }
})


module.exports = router