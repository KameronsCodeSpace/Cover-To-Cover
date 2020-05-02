const db = require("../db/db");

// QUERY to GET all the users 
const getAllUsers = async () => {
  const requestQuery = `SELECT id, username, avatar, region FROM users`
  let allUsers = await db.any(requestQuery);
  console.log("users", allUsers);
  return allUsers;

};

const getByUsername = async (username) => {
    const requestQuery = `SELECT * FROM users WHERE username = $1`
    try {
        const user = await db.one(requestQuery, [username])
        console.log('user!!!!', username)
        return user
    } catch (err) {
        if (err.message === 'No data returned from the query.') {
            return null
        } else {
            console.log('Error', err)
            throw err;
        }
    }
}

//QUERY to GET user by id 
const getUserById = async (params) => {
    const requestQuery = `SELECT * FROM users WHERE id = $1`
    const user = await db.one(requestQuery, [params])
    return user
}

//QUERY to POST a new user
const registerNewUser = async (user) => {
    const insertQuery = `INSERT INTO users(username, password, region, info, email, avatar)
                            VALUES($1, $2, $3, $4, $5, $6)
                            RETURNING *;`
    const newUser = await db.oneOrNone(insertQuery, [
        user.username,
        user.password,
        user.region,
        user.info,
        user.email,
        user.avatar
    ]);
    return newUser;
}

//QUERY to PATCH a user's username
const updateUsername = async (id, username) => {
    console.log('id', id)
    const updateQuery = `UPDATE users SET username=$2 WHERE id=$1 
            RETURNING *`;
    const update = await db.one(updateQuery, [id,
        username]);
    console.log('update', update);
    return update;
}

//QUERY to PATCH a user's password
const updatePassword = async (id, password) => {
    console.log('id', id)
    const updateQuery = `UPDATE users 
                            SET password=$2 
                            WHERE id=$1 
                              RETURNING *`;
    const update = await db.one(updateQuery, [id, password]);
    console.log('update', update);
    return update;
}

//QUERY to PATCH a user's email
const updateEmail = async (id, email) => {
    console.log('id', id)
    const updateQuery = `UPDATE users 
                        SET email=$2 
                        WHERE id=$1 
                        RETURNING *`;
    const update = await db.one(updateQuery, [id, email]);
    console.log('update', update);
    return update;
}

//QUERY to PATCH a user's region
const updateRegion = async (id, region) => {
    console.log('id', id)
    const updateQuery = `UPDATE users 
                        SET region=$2 
                        WHERE id=$1 
                        RETURNING *`;
    const update = await db.one(updateQuery, [id, region]);
    console.log('update', update);
    return update;
}

//QUERY to PATCH a user's info
const updateInfo = async (id, info) => {
    console.log('id', id)
    const updateQuery = `UPDATE users 
                        SET info=$2 
                        WHERE id=$1 
                        RETURNING *`;
    const update = await db.one(updateQuery, [id, info]);
    console.log('update', update);
    return update;
}

//QUERY to PATCH a user's avatar
const updateAvatar = async (id, avatar) => {
    console.log('id', id)
    const updateQuery = `UPDATE users 
                        SET avatar=$2 
                        WHERE id=$1 
                        RETURNING *`;
    const update = await db.one(updateQuery, [id, avatar]);
    console.log('update', update);
    return update;
}

const deleteUser = async (params) => {
    const deleteQuery = `DELETE FROM users WHERE id = $1 RETURNING *`;
    const deletedUser = await db.oneOrNone(deleteQuery, [params]);
    console.log("deleted user", deletedUser);
    return deletedUser;
}

module.exports = {
    //   getAllUsers,
    getUserById,
    getByUsername,
    registerNewUser,
    updateUsername,
    updatePassword,
    updateEmail,
    updateRegion,
    updateInfo,
    updateAvatar,
    deleteUser
};
