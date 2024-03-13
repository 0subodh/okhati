const mongoose = require('mongoose');
const keys = require('./keys');

const connectionString = keys.CONNECTION_STRING_MD;

const connectToDB = async () => {
  try {
    await mongoose.connect(connectionString, {
      autoIndex: true,
    });
    console.log('Connected to Mongodb Atlas');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectToDB;
