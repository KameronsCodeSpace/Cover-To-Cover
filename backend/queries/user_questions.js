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

module.exports = {
    createNewQuestion
}
