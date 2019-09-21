const { Highscore } = require('../../models');

const create = async (req, res, next) => {
  const { body } = req;

  // const
  newScore = {
    nickname: body.nickname,
    score: body.score
  };

  console.log(newScore);

  try {

    // #future
    // models from registry or injected as DI
    // do not use proxyquire library
    const highscore = await Highscore.create(newScore);
  
    res.json(highscore);
  } catch (error) {
    next(error);
  }
};

module.exports = create;
