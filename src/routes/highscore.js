const express = require('express');
const router = express.Router();

const highscoreValidator = require('../validators/highscore');
const { create, read } = require('../handlers/highscore');
const createValidateMiddleware = require('../middlewares/validate');

// api prefix should be in upper level
router.get(
  '/api/highscore',
  createValidateMiddleware(highscoreValidator.read),  // you dont need validation for READ
  read
);
router.post(
  '/api/highscore',
  createValidateMiddleware(highscoreValidator.create),
  create
);

module.exports = router;
