const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.get('/:hashtag', async (req, res) => {
    let hashtagName = req.params.hashtag;
    console.log(hashtagName)
    try {
        let imgByHashtag = await db.any(
        `SELECT * FROM image_tags
        INNER JOIN posts ON posts.id = post_tag.ptag_id
        INNER JOIN tags ON tags.id = post_tags.tag_id
        WHERE tag_name = $1`, hashtagName);
        res.json({
            success: true,
            imgArr: imgByHashtag
        })
    }
    catch(err) {
        res.send({
            success: false,
            error: "Hashtag does not exist"
        })
    }

})
router.get ('/tag/:tag' , async (req,res) => {
    let tagName = req.params.tag
    try {
        let tagId = await db.one(
            `SELECT id FROM tags WHERE tag_name = $1 `, tagName
        )
        res.json({
            success: true,
            tagId: tagId
        })
    }
    catch(err) {
        res.send({
            success: false,
            error: "Hashtag does not exist"
        })
    }
    
})
router.post('/tag/:tag', async (req,  res) => {
    let tagName = req.params.tag;
    try {
        let insertQuery = `INSERT INTO tags(tag_name)
        VALUES ($1)`
        await db.none(insertQuery, tagName)
        res.json({
            success: true,
            message: "tags updated"
        })
    }
    catch(err) {
        res.send({
            success: false,
            error: "Cannot add tag"
        })
    }
})

module.exports = router;