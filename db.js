var mongoose = require('mongoose');

let init = async () => {
  let db;
  try {
    db = await mongoose.connect('mongodb://localhost/highscore', {
      useNewUrlParser: true
    });
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
