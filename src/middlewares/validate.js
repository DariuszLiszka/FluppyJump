const Joi = require('joi');
// space

const validateMiddleware = schema => {
  return (req, res, next) => {
    const request = {
      body: req.body
    };

    console.log(request);
    const result = schema.validate(request);

    const { error } = result;

    next(error);
  };
};

module.exports = validateMiddleware;
