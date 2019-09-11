let Joi = require('joi');

const highscoreValidator = {
  create: Joi.object().keys({
    body: Joi.object().keys({
      nickname: Joi.string().required(),
      score: Joi.number().required()
    })
  }),
  read: Joi.object()
};

module.exports = highscoreValidator;
