const express = require('express');
const router = express.Router();
const db = require('../db/db');
const usersQueries = require("../queries/user_questions");

/* Route to GET all questions. */
router.get('/all/:storyid', async (req, res) => {
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

//Get ID of the followup question
router.get('/findid/:followupquestion', async (req, res, next) => {
  let question = req.params.followupquestion

  console.log('What is the followupQuestion?', question)

  try {
    const thisQuestionId = await usersQueries.getFollowUpQuestionId(question);
    console.log('Proof thisQuestionId Works', thisQuestionId)
    res.json({
      payload: thisQuestionId,
      message: `This question was successfully retrieved`,
      error: false
    });
  } catch (error) {
    console.log('error', error)
    res.status(500);
    res.json({
      message: `Unable to retrieve question`,
      error: true
    });

  }
})

router.post('/:storyid', async (req, res) => {
  console.log('CHECKTHIS', req.body);
  let story_id = req.params.storyid
  let question = req.body.new_question
  let username = req.body.user_name
  let useremail = req.body.user_email
  let userregion = req.body.user_region
  let suggestion = req.body.suggested_story

  console.log('id and question', story_id, question)
  try {
    const newQuestion = await usersQueries.createNewQuestion(story_id, question, username, useremail, userregion, suggestion)
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

router.patch('/', async (req, res) => {
  let theUserQuestion = req.body.theUserQuestion;
  console.log('The questions', theUserQuestion)

  let newResponse = req.body.followupResponse;
  console.log('New Reasponse', newResponse)

  // console.log(newResponse, id)
  try {
    const updatedFeed = await usersQueries.updateFollowupAnswer(newResponse, theUserQuestion)
    //    console.log('updated feed', )
    res.json({
      payload: updatedFeed,
      message: "newResponse was changed"
    })
  } catch (error) {
    res.json({
      message: 'There was an error'
    })
    console.log(error);
  }

})

// getFollowUpQuestions
module.exports = router;