const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const routes = require('./routes.js');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  cors({
      origin: ['http://localhost:3000'],
      methods: ['GET', 'POST'],
      credentials: true
  })
);

app.use(function(req, res, next) {
  console.log(`${req.method}\t ${req.url}`)
  next()
})

app.use('/', routes);
const server = app.listen(3000, () => {
  console.log('devcat-serer listen on 3000');
});

module.exports = server;