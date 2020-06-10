const express = require('express');
const router = express.Router();
const db = require('../db/db');
const usersQueries = require("../queries/user_questions");

/* Route to GET all questions. */
router.get('/:storyid',  async (req, res) => {
    let id = req.params.storyid
    try {
    let new_questions = await db.any(`SELECT * FROM user_questions WHERE story_id = ${id}`);
     console.log("user_questions", new_questions);
      res.json({
        payload: new_questions,
        message: `Request was successfully received`,
      });
    } catch (error) {
      res.status(500);
      res.json({
        message: `Unable to retrieve questions`,
      });
      console.log(error);
    }
  });

  router.post('/:storyid', async (req, res) => {
      console.log('CHECKTHIS', req.body);
    let story_id = req.params.storyid

    let question = req.body.new_question
    console.log('id and question', story_id, question)
      try {
         const newQuestion = await usersQueries.createNewQuestion(story_id, question)
            res.json({
              payload: newQuestion,
              message: `Post was sent!`
            })
      } catch (error) {
          res.json({
              message: `There was an error!`
          })
          console.log(error)
      }
    })
 
 
  module.exports = router;