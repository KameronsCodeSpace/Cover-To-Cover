const db = require("../db/db");


//QUERY to add a feed in the POST route
const createNewFollowUpQuestion = async (questionid, response) => {
    let insertQuery = `INSERT INTO followup_questions(user_question_id, followup_answer)
                        VALUES($1, $2)
                        RETURNING *`

    const newFeed = await db.oneOrNone(insertQuery, [
        questionid,
        response
    ]);
    // console.log('new feed', newFeed)
    return newFeed
}

//QUERY get follow up questions for a story
const getFollowUpQuestions = async (question) => {
    let requestQuery = `SELECT *
                            FROM user_questions uq
                            INNER JOIN posts p ON
                                uq.story_id = p.id
                            WHERE p.id = $1`
    const thisQuestion = await db.one(requestQuery, question)
    console.log('This Question', thisQuestion)
    return thisQuestion
}

module.exports = {
    getFollowUpQuestions,
    createNewFollowUpQuestion
}

// // //QUERY to add first question to new Story
// const createNewStarterQuestion = async (feed) => {
//     let insertQuery = `INSERT INTO starter_question(story_id, first_question)
//                         VALUES ($1, $2)
//                         RETURNING *`

//     const newFeed = await db.oneOrNone(insertQuery, [
//         feed.storyid,
//         feed.questionid
//     ]);

//     return newFeed
// }

// //QUERY get first question for a story
// const getFirstStoryQuestion = async (question) => {
//     let requestQuery = `SELECT starter
//                             FROM questions q
//                             INNER JOIN starter_question sq ON
//                                 q.id = sq.first_question INNER JOIN posts p ON
//                                 p.id = sq.story_id
//                             WHERE p.id = $1`

                            

//     const thisQuestion = await db.one(requestQuery, question)
//     console.log('This Question', thisQuestion)
//     return thisQuestion
// }