const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const bodyParser = require('body-parser')
// const indexRouter = require('./routes/index');
const usersRouter = require('./src/routes/users');
const moviesRouter = require('./src/routes/movies-router');
const db = require('./src/config/db')
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/movies', moviesRouter);

const multer = require('multer');
const storage =multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './assets/')
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
});
const upload = multer({storage: storage})
  

module.exports = app;
