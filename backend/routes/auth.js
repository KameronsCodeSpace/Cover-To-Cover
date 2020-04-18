const express = require("express");
const router = express.Router();
const authHelpers = require('../auth/helpers');
const usersQueries = require("../queries/users"); 
const passport = require('../auth/passport');

//POST Route to add a new user
router.post("/signup", async (req, res, next) => {
  try {
    const passwordDigest = await authHelpers.hashPassword(req.body.password)
     let data = {
      username: req.body.username,
      email: req.body.email,
      password: passwordDigest,
      region: req.body.region,
      info: req.body.info,
      avatar: req.body.avatar
    };
    const newUser = await usersQueries.registerNewUser(data)
    res.json({
      payload: newUser,
      message: `Successfully registered new user`,
      error: false
    });
  } catch (error) {
    res.status(500);
    res.json({
      message: `Unable to add a user`,
      error: true
    });
    console.log("err", error);
  }
});

router.post("/login", passport.authenticate('local'), (req, res, next) => {
    console.log('req.body', req.body)
   res.json({
        payload:req.user,
        message: 'user has successfully logged in',
        err: false
    })
});

router.get("/logout", (req, res, next) => {

});

module.exports = router;