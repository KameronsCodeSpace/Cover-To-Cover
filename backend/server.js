//Attemping to use mongoDB here
const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();

app.use(express.json());

//connecting to mongo
const db = config.get('mongoURI');

//pulling in mongo DB
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }) // Adding new mongo url parser
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

    //use Routes
    app.use('/api/users', require('./routes/api/users'))
    app.use('/api/auth', require('./routes/api/auth'))
    app.use('/api/posts', require('./routes/api/posts'))


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));