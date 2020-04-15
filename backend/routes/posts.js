const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.get('/all', async (req, res) => {
   try {
       let posts = await db.any(`SELECT * FROM posts`);
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

router.post('/new', async (req, res) => {
//   console.log(req.body);
  try {
      let insertQuery = `
      INSERT INTO posts(file_src, caption, p_username)
      VALUES($1, $2, $3)  
      ` 
      
      await db.none(insertQuery, [req.body.file_src, req.body.caption, req.body.p_username]);
      res.json({
          payload: req.body,
          message: `Post was sent!`
      })
  } catch (error) {
      res.json({
          message: `There was an error!`
      })
      console.log(error)
  }
})

router.delete('/:id', async (req, res) => {
    let id = req.params.id
    try {
        let deletePost = await db.none(`DELETE FROM posts WHERE id = ${id}`)
        res.json({
            message: `Post ${id} was deleted`
        })
    } catch (error){
        res.json({
            message: `Cannot remove post`
        })
        console.log(error);
    }
})

router.patch('/:id', async (req, res) => {
    let caption = req.body.caption;
    let id = Number(req.params.id);
    // console.log(newCaption, id)
    try{
        let patchPost = `UPDATE posts SET caption = $1 WHERE id = $2`
        await db.none(patchPost, [caption, id])
        res.json({
            payload: req.body,
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