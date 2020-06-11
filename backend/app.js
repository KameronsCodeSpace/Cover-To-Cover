require('dotenv').config()
const express = require('express');
const cors = require('cors')
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const passport = require('./auth/passport');
const bodyParser = require('body-parser');
const multer = require('multer')
const users = require('./queries/users');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const postsRouter = require('./routes/posts');
const commentsRouter = require('./routes/comments');
const likesRouter = require('./routes/likes');
const tagsRouter = require('./routes/tags');
const questionsRouter = require ('./routes/questions');
// const followUpQuestions = require ('./routes/followup_questions');
const userQuestions = require ('./routes/user_questions');

// const postRouter = require('./routes/posts');
const app = express();
const storage = multer.diskStorage({
  destination:  (req, file, cb) => {
    cb(null, './public/avatar_links/')
  },
  filename:  (req, file, cb) => {
    let name = Date.now() + "_" + file.originalname
    cb(null, name)
  }
})
 const upload = multer ({
    storage: storage
 })
 const upstream = multer ({
   storage: storage
 })
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("NOT_A_GOOD_SECRET"));
app.use(express.static(path.join(__dirname, '../backend/public')));

app.use(session({
    secret: "NOT_A_GOOD_SECRET",
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/blog', postsRouter);
app.use('/comments', commentsRouter); 
app.use('/likes', likesRouter);
app.use('/tags', tagsRouter);
app.use('/questions', questionsRouter);
app.use('/userquestions', userQuestions)
// app.use('/followupquestions', followUpQuestions);

app.post('/upload', upload.single('avatar'), async(req, res,next) => {
    console.log('req.file:', req.file)
    console.log('req.body:', req.body)
    let userPic = req.file.path
    console.log('user pic', userPic)
    let imgURL = `http://localhost:3100/${userPic.replace('public/', '')}`;
    if (!req.file) {
    console.log("No file received");
    return res.send({
      success: false
    });
  } else {
    await users.updateAvatar(req.body.id, imgURL)
     res.json({
        imgURL: imgURL,
        msg: `File has been uploaded`
      })
      console.log('file received');
      // return res.send({
      //   success: true
      // })
    }
   
})
app.post('/upstream', upstream.single ("image"), (req,res,next) => {
    
    let fileURL = "http://localhost:3100/" + req.file.path.replace('public/', '')
    res.json({
        fileURL: fileURL,
        message: "file uploaded"
 })
 })
 
module.exports = app;