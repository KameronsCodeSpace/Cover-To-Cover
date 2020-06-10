const db = require("../db/db");

//QUERY to add a feed in the POST route
const createNewQuestion = async (id, question) => {
    let insertQuery = `INSERT INTO user_questions(story_id, new_question)
                        VALUES($1, $2)
                        RETURNING *`

    const newFeed = await db.one(insertQuery, [id, question]);
    console.log('new feed', newFeed)
    return newFeed
}

module.exports = {
    createNewQuestion
}
