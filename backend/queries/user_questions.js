const db = require("../db/db");

//QUERY to add a feed in the POST route
const createNewQuestion = async (id, question, username, useremail, userregion, suggestion) => {
    let insertQuery = `INSERT INTO user_questions(story_id, new_question, user_name, user_email, user_region, suggested_story)
                        VALUES($1, $2, $3, $4, $5, $6)
                        RETURNING *`

    const newFeed = await db.one(insertQuery, [id, question, username, useremail, userregion, suggestion]);
    console.log('new feed', newFeed)
    return newFeed
}

//QUERY get follow up questions ID  for a story
const getFollowUpQuestionId = async (question) => {
    let requestQuery = `SELECT id,
                            FROM user_questions uq 
                            WHERE uq.new_question = $1`
    const thisQuestionId = await db.one(requestQuery, question)
    console.log('This Question', thisQuestionId)
    return thisQuestionId
}

//QUERY to update a user_questions in the PATCH route
const updateFollowupAnswer = async (followup_answer, id) => {
    let updateQuery = `UPDATE user_questions uq
                            SET followup_answer = $1 
                            WHERE uq.new_question = $2
                            RETURNING *`
    const updatedFeed = await db.one(updateQuery, [followup_answer, id])
    return updatedFeed
}

module.exports = {
    createNewQuestion,
    getFollowUpQuestionId,
    updateFollowupAnswer
}
