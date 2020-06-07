const db = require("../db/db");

//QUERY to add first question to new Story
const createNewStarterQuestion = async (feed) => {
    let insertQuery = `INSERT INTO starter_question(story_id, first_question)
                        VALUES ($1, $2)
                        RETURNING *`

    const newFeed = await db.oneOrNone(insertQuery, [
        feed.storyid,
        feed.questionid
    ]);

    return newFeed
}

module.exports = {
    createNewStarterQuestion
}