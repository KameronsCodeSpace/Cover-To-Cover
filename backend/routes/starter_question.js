const express = require('express');
const router = express.Router();
const db = require('../db/db');
const usersQueries = require("../queries/starter_question");
const {loginRequired} = require("../auth/helpers")

router.get('/:id', async (req, res) => {
    let id = req.params.id
   try {
       let starter_question = await db.one(`SELECT * FROM starter_question WHERE story_id = ${id}`);
       res.json({
           payload: starter_question,
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

router.post('/new_starter', loginRequired, async (req, res) => {
    //   console.log(req.body);
      try {
          let data = {
              story_id: req.body.storyid,
              first_question_id: req.body.questonid
            }
         const newFeed = await usersQueries.createNewStarterQuestion(data)
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