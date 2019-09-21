const errorMiddleware = (error, req, res, next) => {
  // logger
  console.error(error.stack);

  // nie kazdy error to 500
  res.status(500).json({ error });
};

module.exports = errorMiddleware;
