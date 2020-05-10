require('dotenv').config()
const express = require('express');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const passport = require('./auth/passport');
const bodyParser = require('body-parser');
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/images")
    },
    filename: (req, file, cb) => {
      let name = Date.now() + "-" + file.originalname
      cb(null, name)
    }
  })
 
 const upload = multer ({
    storage: storage
 })

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const postsRouter = require('./routes/posts');
const commentsRouter = require('./routes/comments');
const likesRouter = require('./routes/likes');
const tagsRouter = require('./routes/tags');
const postRouter = require('./routes/posts');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
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

app.post('/upload', upload.single ("image"), (req,res,next) => {

    
    let file = "http://localhost:3100/" + req.file.path.replace('public/', '')
    res.json({
        file: file,
        message: "file uploaded"
 })
 })
 

module.exports = app;
