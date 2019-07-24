const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();


app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
require('./src/routes')(app);
app.listen(3000);
console.log(`Server started on port 3000`)
