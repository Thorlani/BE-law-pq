const router = require('express').Router()
const LegalComment = require('../model/Lcomment')

router.post('/', async(req, res) => {

    const post = new LegalComment({
        name: req.body.name,
        content: req.body.content
    })
    try {
        const LegalCommentReq = await post.save()
        res.send(LegalCommentReq)
    } catch (error) {
        res.status(400).send(error)
    }
})


module.exports = router