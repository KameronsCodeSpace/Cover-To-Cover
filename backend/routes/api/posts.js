const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')

//Post model
const Post = require('../../models/Posts');

// @route GET api/posts
// @desc Get All posts
// @access Public
router.get('/', (req, res) => {
    Post.find()
        .sort({ date: -1 })
        .then(posts => res.json(posts));
});

// @route POST api/posts
// @desc Create a post request
// @access Private
router.post('/', auth, (req, res) => {
    const newPost = new Post({
        caption: req.body.caption
    });

    newPost.save().then(post => res.json(post));
});

// @route DELETE api/posts
// @desc Delete a post
// @access Private
router.delete('/:id', auth, (req, res) => {
    Post.findById(req.params.id)
        .then(post => post.remove()
            .then(() => res.json({ deletion: true })))
        .catch(err => res.status(404).json({ deletion: false }))
});

module.exports = router;