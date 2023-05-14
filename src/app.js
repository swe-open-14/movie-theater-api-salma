const express = require('express');
const app = express();

const { userRouter} = require('./routes/User.routes');

app.use('/users', userRouter);

module.exports = app;