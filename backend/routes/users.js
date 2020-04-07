const express = require('express');
const router = express.Router();
const db = require('../db/db');

/* Route to GET all users listing. */
router.get ('/',async(req, res, next) => {
  try {
    const requestQuery = `SELECT * FROM users`
    const allUsers = await db.any (requestQuery)
    console.log(allUsers)
    res.json({
      payload: allUsers,
      message: `Users request was successfully received`
    })
  } catch (error) {
    res.status(404)
    res.json({
      message: `Unable to retrieve users`
    })
    console.log('err', error)
  }
});

// Route to GET users by ID.
router.get('/:id', async(req, res, next)=> {
  const params = req.params.id
  console.log('params', params)
   const requestQuery = `SELECT * FROM users WHERE id=$1`
  try {
    const singleUsers = await db.one(requestQuery, params)
    console.log(singleUsers)
    res.json({
      payload: singleUsers,
      message: `User was successfully retrieved`
    })
  } catch (error) {
    res.status(404)
    res.json({
      message: `Unable to retrieve user`
    })
    console.log('err', error)
  }
});

//POST Route to add a new user 
router.post('/', async(req, res, next) => {
  try{
    const insertQuery = `INSERT INTO users(username, password, region, info, email, avatar)
                            VALUES($1, $2, $3, $4, $5, $6)`
    await db.none(insertQuery, [req.body.username, req.body.password, req.body.region, req.body.info, req.body.email, req.body.avatar ])

    let data = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      region: req.body.region,
      info: req.body.info,
      avatar: req.body.avatar
    }

    res.json({
      payload:data,
      message: `Successfully registered new user`
    })

  } catch (error) {
    res.status(404)
    res.json({
      message: `Unable to retrieve user`
    })
    console.log('err', error)
  }
})

module.exports = router;
