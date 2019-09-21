const Highscore = require('../../models/highscore.js');


// thing to improve: Pagination
const read = async (req, res, next) => {
  try {
    const highscore = await Highscore.find({});
    res.json(highscore);
  } catch (error) {
    next(error);
  }
};

module.exports = read;
