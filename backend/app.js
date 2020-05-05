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

// const upload = multer({
//     dest: "./public/avatar_links"
// })

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const postsRouter = require('./routes/posts');
const commentsRouter = require('./routes/comments');
const likesRouter = require('./routes/likes');
const tagsRouter = require('./routes/tags');
// const postRouter = require('./routes/posts');

const app = express();


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
app.use('/comments', commentsRouter); 765
app.use('/likes', likesRouter);
app.use('/tags', tagsRouter);

app.post('/upload', upload.single('avatar'), (req, res,next) => {
    console.log('req.file:', req.file)
    console.log('req.body:', req.body)
    let userPic = req.file.path
    let imgURL = `http://localhost:3100/${userPic.replace('public/', '')}`;
    res.json({
        imgURL: imgURL,
        msg: `File has been uploaded`
    })
})

// app.use("*", (req, res) => {
//     res.sendFile(path.join(__dirname + "/../backend/public/index.html"));
//   });
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
