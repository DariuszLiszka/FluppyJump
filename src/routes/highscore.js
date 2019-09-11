const express = require('express');
const router = express.Router();

const highscoreValidator = require('../validators/highscore');
const { create, read } = require('../handlers/highscore');
const createValidateMiddleware = require('../middlewares/validate');
__dirname = 'C:/Users/Dariusz/PhaserGame';

router.use(express.static(__dirname));
router.get('/', (req, res) => res.sendFile(__dirname + 'index.html'));
console.log(__dirname, 'xd');
router.get(
  '/api/highscore',
  createValidateMiddleware(highscoreValidator.read),
  read
);
router.post(
  '/api/highscore',
  createValidateMiddleware(highscoreValidator.create),
  create
);

module.exports = router;
