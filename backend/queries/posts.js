const db = require("../db/db");

//QUERY to add a feed in the POST route
const createNewPost = async (poster, question, image, storytitle, caption) => {
    let insertQuery = `INSERT INTO posts(p_username, first_question, file_src, story_title, caption)
                        VALUES($1, $2, $3, $4, $5)
                        RETURNING *`

    const newFeed = await db.oneOrNone(insertQuery, [
        poster,
        question,
        image,
        storytitle,
        caption
    ]);
    // console.log('new feed', newFeed)
    return newFeed
}

//QUERY get first question for a story
const getFirstStoryQuestion = async (question) => {
    let requestQuery = `SELECT starter
                            FROM questions q
                            INNER JOIN posts p ON
                                q.id = p.first_question
                            WHERE p.id = $1`
    const thisQuestion = await db.one(requestQuery, question)
    console.log('This Question', thisQuestion)
    return thisQuestion
}

//QUERY to remove a feed in the DELETE route
const deletedPost = async (id) => {
    const deleteQuery = `DELETE 
                        FROM posts 
                        WHERE id = ${id}`
    let removedPost = await db.oneOrNone(deleteQuery)
    return removedPost
}

//QUERY to update a feed in the PATCH route
const updatePost = async (caption, id) => {
    let updateQuery = `UPDATE posts 
                            SET caption = $1 
                            WHERE id = $2
                            RETURNING *`
    const updatedFeed = await db.one(updateQuery, [caption, id])
    return updatedFeed
}

// // QUERY to GET the starter questions 
// const getAllQuestions = async () => {
//   const requestQuery = `SELECT question FROM questions`
//   let allQuestions = await db.any(requestQuery);
//   console.log("questions", allquestions);
//   return allQuestions;

// };

module.exports = {
    createNewPost,
    deletedPost,
    updatePost,
    getFirstStoryQuestion
}

