const router = require('express').Router()
const ContractComment = require('../model/Ccomment')

router.post('/', async(req, res) => {

    const post = new ContractComment({
        name: req.body.name,
        content: req.body.content
    })
    try {
        const ContractCommentReq = await post.save()
        res.send(ContractCommentReq)
    } catch (error) {
        res.status(400).send(error)
    }
})


module.exports = router