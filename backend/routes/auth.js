const express = require("express");
const router = express.Router();
const authHelpers = require('../auth/helpers');
const usersQueries = require("../queries/users");
const passport = require('../auth/passport');


//POST Route to add a new user
// upload.single('avatar'),
router.post("/signup", authHelpers.registrationValidation, async (req, res, next) => {
  headers = { "content-type": "application/json" }
  const { username, email, password, region } = req.body;

  try {
    
    const passwordDigest = await authHelpers.hashPassword(password)
    let data = {
      username: username,
      email: email,
      password: passwordDigest,
      region: region,
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

router.post("/login", authHelpers.loginValidation, (req, res, next) => {
  
  passport.authenticate('local', (err, user) => {
    if (err) {
      console.log('Error', err)
      return next(err)
    }

    if (!user) {
      res.status(401);
      return res.json({
        payload: null,
        msg: 'Invalid User Information',
        err: true
      })
    }

    req.login(user, err => {
      if (err) return next(err);
      res.status(200);
      res.json({
        payload: req.user,
        message: 'User has successfully logged in',
        err: false
      });
    });
  })(req, res, next)
});


router.get("/logout", (req, res, next) => {
  res.send('User')
});

router.get("/isUserLoggedIn", authHelpers.loginRequired, (req, res) => {
  console.log('req.user', req.user)
  res.json({
    payload: req.user,
    msg: "User is logged in. Session active",
    err: false
  })
})

module.exports = router;