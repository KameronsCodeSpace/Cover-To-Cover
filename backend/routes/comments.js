const express = require('express');
const router = express.Router();
const db = require('../db/db');
const usersQueries = require("../queries/comments");
const {loginRequired} = require("../auth/helpers")

router.get('/blog/:c_post_id', loginRequired, async (req,res)=>{
    let id = req.params.c_post_id;
    try {
       const comment = await usersQueries.getCommentsOnPostsById(id)
        res.json({
            payload: comment,
            message: 'Success. Retrieved all the comments.'
        })
    } catch (error) {
        console.log(error)
        res.status(500)
        res.json({
            message: "Error. Something went wrong."
        })
    }
})

router.post('/new', async (req, res) => {
    let id = req.params.c_post_id;
    try {
        let data = {
          comment: req.body.comment,
          c_post_id: req.body.c_post_id,
          commentors_name: req.body.commentors_name
        }
        const newComment = await usersQueries.addCommentOnAPost(data)

        res.json({
            payload: newComment,
            message: `success! added a new comment to post ${id}`
        })
    } catch (error) {
        console.log(error)
        res.json({
            message: "Something went wrong."
        })
    }
})


module.exports = router;