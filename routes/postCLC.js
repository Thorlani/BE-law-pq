const router = require('express').Router()
const ConstitutionalComment = require('../model/Clcomment')

router.post('/', async(req, res) => {

    const post = new ConstitutionalComment({
        name: req.body.name,
        content: req.body.content
    })
    try {
        const ConstitutionalCommentReq = await post.save()
        res.send(ConstitutionalCommentReq)
    } catch (error) {
        res.status(400).send(error)
    }
})


module.exports = router