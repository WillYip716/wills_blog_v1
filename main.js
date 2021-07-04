

const express = require("express");
require("dotenv").config(); // for loading environment variables
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

var indexRouter = require('./routes/index');

app.use(function (req, res, next) {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self'"
  );
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', indexRouter);
const MONGO_URI = process.env.MONGODB_URI||process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true })
.then(() => console.log("Mongo Connection successful"))
.catch(err => console.log("err"));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});