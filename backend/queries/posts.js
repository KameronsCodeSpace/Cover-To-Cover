const db = require("../db/db");

//QUERY to add a feed in the POST route
const createNewPost = async(feed) => {
    let insertQuery = `INSERT INTO posts(file_src, caption, p_username)
                        VALUES($1, $2, $3)
                        RETURNING *` 
    
    const newFeed = await db.oneOrNone(insertQuery, [
          feed.image, 
          feed.caption, 
          feed.poster
        ]);
        // console.log('new feed', newFeed)
    return newFeed
}

//QUERY to remove a feed in the DELETE route
const deletedPost = async(id) => {
    const deleteQuery = `DELETE 
                        FROM posts 
                        WHERE id = ${id}`
    let removedPost = await db.oneOrNone(deleteQuery)
    return removedPost
}

//QUERY to update a feed in the PATCH route
const updatePost = async(caption, id) => {
     let updateQuery = `UPDATE posts 
                            SET caption = $1 
                            WHERE id = $2
                            RETURNING *`
     const updatedFeed = await db.one(updateQuery, [caption, id])
        return updatedFeed
}

module.exports = {
    createNewPost,
    deletedPost,
    updatePost,
}

