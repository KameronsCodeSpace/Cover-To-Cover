const express = require('express');
const router = express.Router();
const questionQueries = require("../queries/followup_questions");

//Route to GET story questions by story ID
router.get("/:storyid", async (req, res, next) => {
    console.log('FollowUpQuestion Body', req.body);

    const storyid = req.params.storyid

    console.log('What is the story id?', storyid)
    try {

        const theseQuestions = await questionQueries.getFollowUpQuestions(storyid);
        console.log('Proof theseQuestions Works', theseQuestions)
        res.json({
            payload: theseQuestions,
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

router.post('/new', async (req, res) => {
    console.log('CHECKITOUT', req.body);
  let questionid = req.body.followupquestion
  let response = req.body.userresponse

  try {
      const newFeed = await questionQueries.createNewFollowUpQuestion(questionid, response)
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

module.exports = router;

// //Make a new question. Not finished yet
// router.post('/new_starter', async (req, res) => {
//     //   console.log(req.body);
//     try {
//         let data = {
//             story_id: req.body.storyid,
//             first_question_id: req.body.questonid
//         }
//         const newFeed = await questionQueries.createNewStarterQuestion(data)
//         res.json({
//             payload: newFeed,
//             message: `Post was sent!`
//         })
//     } catch (error) {
//         res.json({
//             message: `There was an error!`
//         })
//         console.log(error)
//     }
// })

// //Route to GET story questions by story ID
// router.get("/:storyid", async (req, res, next) => {
//     console.log('wrewer', req.body);

//     const storyid = req.params.storyid

//     console.log('What is the story id?', storyid)
//     try {

//         const thisQuestion = await questionQueries.getFirstStoryQuestion(storyid);
//         console.log('Proof thisQuestion Works', thisQuestion)
//         res.json({
//             payload: thisQuestion,
//             message: `This question was successfully retrieved`,
//             error: false
//         });
//     } catch (error) {
//         console.log('error', error)
//         res.status(500);
//         res.json({
//             message: `Unable to retrieve question`,
//             error: true
//         });

//     }
// })