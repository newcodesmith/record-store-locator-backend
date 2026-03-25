const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();

const stores = require('./routes/stores-routes');
const comments = require('./routes/comments-routes');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.enable('trust proxy');
app.use(cors());

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.use('/stores', stores);
app.use('/comments', comments);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

module.exports = app;
