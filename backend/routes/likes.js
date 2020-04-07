const express = require('express');
const router = express.Router();
const posts = require("./posts.js");
const db = require('../db/db');

router.get('/:id',  async (req,res)=>{
    let id = req.params.id;
    try {
        let likes = await db.any(`SELECT * FROM likes WHERE post_id = ${id}`)
        res.json({
            payload: likes,
            message: 'Success. Retrieved all the likes.'
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
        let newLike = db.none(`INSERT INTO likes (post_id, liker_name) 
        VALUES ($1, $2)`, [req.body.post_id, req.body.liker_name])
        res.json({
            payload: req.body,
            message: `succes! added a new like to post ${id}`
        })
    } catch (error) {
        console.log(error)
        res.json({
            message: "Something went wrong."
        })
    }
})

module.exports = router;