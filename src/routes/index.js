const express = require('express');
const router = express.Router();

const highscoreRouter = require('./highscore');

router.use('/highscore', highscoreRouter);

module.exports = router;
