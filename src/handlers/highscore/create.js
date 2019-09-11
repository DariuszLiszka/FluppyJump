const { Highscore } = require('../../models');

const create = async (req, res, next) => {
  const { body } = req;
  newScore = {
    nickname: body.nickname,
    score: body.score
  };
  console.log(newScore);
  try {
    const highscore = await Highscore.create(newScore);
    res.json(highscore);
  } catch (error) {
    next(error);
  }
};

module.exports = create;
