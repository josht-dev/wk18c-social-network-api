// *****Import Modules*****
const connection = require('../config/connection');
const { User, Thought } = require('../models');
// Not user if I will need functions from data.js
const { 
  generateUserObj, 
  generateThoughtObj, 
  generateReactionObj 
} = require('./data');

// Connection validation
connection.on('error', (err) => err);

// db reset and seed
connection.once('open', async() => {
  console.info('Successful connection.');
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = [];
  const thoughts = [];
  let counter = 0;

  // Array of 10 unique user objs
  do {
    let newUser = generateUserObj;
    if (!users.includes((user) => {return user.username === newUser.username})) {
      counter++;
      users.push(newUser);
    }
    
  } while (counter <= 10);
  // Array of thought objs

  // Array of reaction objs


  console.info('Database successfully seeded!');
  process.exit(0);
});