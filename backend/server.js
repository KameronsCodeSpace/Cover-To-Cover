//Attemping to use mongoDB here
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const posts = require('./routes/api/posts')

const app = express();

app.use(bodyParser.json());

//connecting to mongo
const db = require('./config/keys').mongoURI;

//pulling in mongo DB
mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

    //use Routes
    app.use('/api/posts', posts)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));