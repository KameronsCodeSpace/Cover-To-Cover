const express = require('express');
const router = express.Router();
const posts = require("./posts.js");
const db = require('../db/db');

router.get('/:id',  async (req,res)=>{
    let id = req.params.id;
    try {
        let comments = await db.any(`SELECT * FROM comments WHERE c_post_id = ${id}`)
        res.json({
            payload: comments,
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

router.post('/:id', async (req, res) => {
    let id = req.params.id;
    try {
        let newComment = db.none(`INSERT INTO comments (comment, c_post_id, commentors_name) 
        VALUES ($1, $2, $3)`, [req.body.comment, req.body.c_post_id, req.body.commentors_name])
        res.json({
            payload: req.body,
            message: `succes! added a new comment to post ${id}`
        })
    } catch (error) {
        console.log(error)
        res.json({
            message: "Something went wrong."
        })
    }
})

module.exports = router;