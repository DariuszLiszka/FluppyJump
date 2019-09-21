// server codebase should be separated ; for example using different repos or proper structure

const express = require('express');
const db = require('./db.js'); // own modules to bottom, separate with \n
const app = express();  // initialization on the bottom, separate with \n
const cors = require('cors');
const port = 3000; // dotenv

//
// please install eslint & use airbnb codestyle
//

// 
const routes = require('./src/routes/highscore'); // ona main route pls with versioning started with api/v1

const { errorHandler, notFoundHandler } = require('./src/middlewares');

const start = async () => {
  await db.init();
  
  app.use(express.static(__dirname))

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  
  app.use(cors);

  app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));
  app.use(routes);
  

  app.use(notFoundHandler);
  app.use(errorHandler);

  app.listen(port, () => console.log(`Example app listening on port dua!`));
};

start().catch(err => {
  console.log('Failed to start server', err);
});
