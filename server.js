const express = require('express');
const db = require('./db.js');
const app = express();
const cors = require('cors');
const port = 3000;
const routes = require('./src/routes/highscore');

const { errorHandler, notFoundHandler } = require('./src/middlewares');

const start = async () => {
  await db.init();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use(routes);
  app.use(cors);
  app.use(notFoundHandler);
  app.use(errorHandler);
  app.use(express.static(__dirname));
  // app.get('/', (req, res) => res.sendFile(__dirname + '/src/index.html'));
  // console.log(__dirname);
  app.listen(port, () => console.log(`Example app listening on port dua!`));
};

start().catch(err => {
  console.log('Failed to start server', err);
});
