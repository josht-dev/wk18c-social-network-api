// *****Import Modules*****
const connection = require('../config/connection');
const { User, Thought } = require('../models');
// Not user if I will need functions from data.js
//const {} = require('./data');

// Connection validation
connection.on('error', (err) => err);

// db reset and seed
connection.once('open', async() => {
  console.info('Successful connection.');
  await Thought.deleteMany({});
  await User.deleteMany({});



  console.info('Database successfully seeded!');
  process.exit(0);
});