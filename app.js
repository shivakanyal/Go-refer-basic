const express = require('express');
const path = require('path')
const mongoose = require('mongoose');
const userRouter =  require('./routes/user')
const bodyParser = require('body-parser');
const app = express()

// express middleware to serve static files
app.use(express.static(path.join(__dirname,'public')));

// express middleware to parse the url-encoded requests
app.use(bodyParser.urlencoded({extended:false}));

// express middleware to use userRouter
app.use(userRouter);

// setting templating engine as ejs
app.set('view engine','ejs');


// Connecting to database
mongoose.connect(
    'mongodb://localhost:27017/GoRefer',
    { useNewUrlParser: true }
    )
    .then(result => {
        app.listen(3000);
        console.log('app is running on port 3000')
    })
    .catch(err => {
        console.log(err);
    })