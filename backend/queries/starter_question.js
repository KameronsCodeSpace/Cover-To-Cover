const db = require("../db/db");

// //QUERY to add first question to new Story
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

//QUERY get first question for a story
const getFirstStoryQuestion = async (question) => {
    let requestQuery = `SELECT starter
                            FROM questions q
                            INNER JOIN starter_question sq ON
                                q.id = sq.first_question INNER JOIN posts p ON
                                p.id = sq.story_id
                            WHERE p.id = $1`

                            

    const thisQuestion = await db.one(requestQuery, question)
    console.log('This Question', thisQuestion)
    return thisQuestion
}

module.exports = {
    createNewStarterQuestion,
    getFirstStoryQuestion
}