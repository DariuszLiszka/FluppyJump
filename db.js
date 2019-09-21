// const
var mongoose = require('mongoose');

// const
let init = async () => {
  let db;
  try {
    // dotenv || from requirejs config module
    db = await mongoose.connect('mongodb://localhost/highscore', {
      useNewUrlParser: true
    });

    // use logger with proper level ; debug | silly | info | warn | error
    console.log('Connected');
  } catch (error) {
    console.log('Error while connecting to database', error);
    throw error;
  }

  return db;
};

module.exports = {
  init
};
