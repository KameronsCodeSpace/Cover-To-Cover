const db = require("../db/db");

//QUERY to receive all the comments on a particular feed on the GET route.
const getCommentsOnPostsById = async(id) => {
    const requestQuery = `SELECT p_username,caption, file_src, commentors_name, comment, c_post_id  
                            FROM comments JOIN posts ON posts.id  = c_post_id
                                WHERE c_post_id = ${id}`
    let comment = await db.any(requestQuery)
        // console.log('comments', comment)
    return comment;
}

const addCommentOnAPost = async(data) => {
    const insertQuery = `INSERT INTO comments (comment, c_post_id, commentors_name) 
                            VALUES ($1, $2, $3) RETURNING *`
    let newComment = await db.oneOrNone(insertQuery, [data.comment, data.c_post_id, data.commentors_name])
    console.log(data.comment)
    // console.log('new comment', newComment)
    return newComment;
}

module.exports = {
   getCommentsOnPostsById,
   addCommentOnAPost,
}