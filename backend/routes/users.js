const express = require("express");
const router = express.Router();
const usersQueries = require("../queries/users");
const db = require("../db/db");
const {loginRequired} = require("../auth/helpers");

const multer = require('multer');



/* Route to GET all users listing. */
router.get("/", loginRequired, async (req, res, next) => {
   console.log('session req', req.session)
  try {
  const requestQuery = `SELECT * FROM users`
  let allUsers = await db.any(requestQuery);
  console.log("users", allUsers);
  
    res.json({
      payload: allUsers,
      message: `Users request was successfully received`,
      error: false
    });
  } catch (error) {
    res.status(500);
    res.json({
      message: `Unable to retrieve users`,
      error: true
    });
    console.log("error", error);
  }
});

// Route to GET users by ID.
router.get("/:id", async (req, res, next) => {
  
  const params = req.params.id
  try {
    const user = await usersQueries.getUserById(params);
    res.json({
      payload: user,
      message: `User was successfully retrieved`,
      error: false
    });
  } catch (error) {
    res.status(500);
    res.json({
      message: `Unable to retrieve user`,
      error: true
    });
    console.log("err", error);
  }
});

router.get("/user/:username", async (req, res, next) => {
  const username = req.params.username

  console.log('What Name is this', username)
  try {
   
    const user = await usersQueries.getByUsername(username);
  
    res.json({
      payload: user,
      message: `User was successfully retrieved`,
      error: false
    });
  } catch (error) {
    console.log('error', error)
    res.status(500);
    res.json({
      message: `Unable to retrieve user`,
      error: true
    });
  
  }
});




//PATCH to update a a user
router.patch("/:id", async (req, res, next) => {
 
  const id = req.params.id; 
  // const username = req.body.username;
  // // const password = req.body.password;
  // const region = req.body.region;
  // const info = req.body.info;
  // const email = req.body.email;
  // const avatar = req.body.avatar;
try {
     let data = {
      username: req.body.username,
      email: req.body.email,
      region: req.body.region,
      info: req.body.info
    }
    const update = await usersQueries.updateUserData(id, data)
    console.log('data', data)
    
    res.json({
      payload: update,
      message: `The data was successfully updated`
    });
  } catch (error) {
    res.status(500);
    res.json({
      message: `Unable to update data`
    });
    console.log('error', error)
  }
 
})

//DELETE Route to delete a user
router.delete("/:id", loginRequired, async (req, res) => {
  let params = req.params.id;

  try {
    const deletedUser = await usersQueries.deleteUser(params)
    res.json({
      payload: deletedUser,
      message: ` Successfully removed user`
    });
  } catch (error) {
    res.status(500);
    res.json({
      message: `Unable to remove user!`
    });
    console.log("err", error);
  }
});

module.exports = router;
