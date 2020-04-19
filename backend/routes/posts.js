const express = require('express');
const router = express.Router();
const db = require('../db/db');
const usersQueries = require("../queries/posts");
const {loginRequired} = require("../auth/helpers")


router.get('/all', async (req, res) => {
   try {
       let posts = await db.any(`SELECT * FROM posts`);
       console.log('posts', posts)
       res.json({
           payload: posts,
           message: `success. retrieved all posts`
       });
   } catch (error) {
       res.status(500);
       res.json({
           message: `Error. Something went wrong!`
       })
       console.log(error);
   }
})

router.get('/:id', async (req, res) => {
    let id = req.params.id
   try {
       let posts = await db.one(`SELECT * FROM posts WHERE id = ${id}`);
       res.json({
           payload: posts,
           message: `success. retrieved the post`
       });
   } catch (error) {
       res.status(500);
       res.json({
           message: `Error. Something went wrong!`
       })
       console.log(error);
   }
})

router.post('/new', loginRequired, async (req, res) => {
//   console.log(req.body);
  try {
      let data = {
          image: req.body.file_src,
          poster: req.body.p_username,
          caption: req.body.caption
        }
     const newFeed = await usersQueries.createNewPost(data)
        res.json({
          payload: newFeed,
          message: `Post was sent!`
        })
  } catch (error) {
      res.json({
          message: `There was an error!`
      })
      console.log(error)
  }
})

router.delete('/:id', loginRequired, async (req, res) => {
    let id = req.params.id
    try {
        let removedPost = await usersQueries.deletedPost(id)
        res.json({
            payload: removedPost,
            message: `Post ${id} was deleted`
        })
    } catch (error){
        res.json({
            message: `Cannot remove post`
        })
        console.log(error);
    }
})

router.patch('/:id', loginRequired, async (req, res) => {
    let caption = req.body.caption;
    let id = Number(req.params.id);
    // console.log(caption, id)
    try{
       const updatedFeed = await usersQueries.updatePost(caption, id)
    //    console.log('updated feed', )
        res.json({
            payload: updatedFeed,
            message: "Caption was changed"
        })
    } catch (error) {
        res.json({
            message: 'There was an error'
        })
        console.log(error);
    }

})

module.exports = router;