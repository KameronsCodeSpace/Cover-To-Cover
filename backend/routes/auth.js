const express = require("express");
const router = express.Router();
const authHelpers = require('../auth/helpers');
const usersQueries = require("../queries/users"); 
const passport = require('../auth/passport');
const multer = require('multer');

const storage = multer.diskStorage({
  destination:  (req, file, cb) => {
    cb(null, './public/avatar_links')
  },
  filename:  (req, file, cb) => {
    let name = Date.now() + "_" + file.originalname
    cb(null, name)
  }
})
const upload = multer({
    storage: storage
})

//POST Route to add a new user
router.post("/signup/", upload.single('avatar'), async (req, res, next) => {
  let userPic = req.file.path
  console.log('user pic', userPic)
  console.log('req.file', req.file)
  console.log('req.body', req.body)
  try {
    let imgURL = `http://localhost:3100/${userPic.replace('public/', '')}`;
    const passwordDigest = await authHelpers.hashPassword(req.body.password)
     let data = {
      username: req.body.username,
      email: req.body.email,
      password: passwordDigest,
      region: req.body.region,
      info: req.body.info,
      avatar: imgURL
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
res.send('User')
});

module.exports = router;