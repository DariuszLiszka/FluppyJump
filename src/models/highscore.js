const mongoose = require('mongoose');

// mix var with const
var highscoreSchema = new mongoose.Schema({ nickname: String, score: Number });

const Highscore = mongoose.model('Highscore', highscoreSchema);

module.exports = Highscore;
