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

  // Array of 10 unique user objs
  let counter = 0;
  do {
    let newUser = generateUserObj();
    let noDuplicate = (!users.some(user => {return user.username === newUser.username})) ? true : false;
    if (noDuplicate) {
      counter++;
      users.push(newUser);
    }
  } while (counter <= 15);

  // Added user friends
  /* Need to add friends after db insert...
  users.forEach((user, index) => {
    // Get random number of friends
    let randomNum = Math.floor(Math.random() * 3);
    // Store current friends to check for duplicates
    let friends = [];
    // Loop to add each friend
    for (let i = 0; i <= randomNum; i++) {
      // Get random user index for friend
      let randIndex = Math.floor(Math.random() * users.length);
      // Check for user being their own friend
      if (randIndex === index) {
        if (index === 0 || index !== users.length) {
          randIndex++;
        } else {
          randIndex--;
        }
      }
      // 
      let getFriend = users[];
    }
  });
  */

  // Array of thought objs for each user
  users.forEach((user, index) => {
    // Random number of thoughts
    let randomNum = Math.floor(Math.random() * 3);

    // Loop random number of times generating thoughts
    for (let i = 0; i <= randomNum; i++) {
      // Generate thoughts for user
      let newThought = generateThoughtObj(user.username);
      newThought.reactions = [];

      // Generate responses for thought
      let randNum = Math.floor(Math.random() * 3);
      for (let i = 0; i <= randNum; i++) {
        let userIndex = Math.floor(Math.random() * users.length);
        let response = generateReactionObj(users[userIndex].username);
        
        newThought.reactions.push(response);
      }

      // Push newThought to thoughts array
      thoughts.push(newThought);
    }
  });

  // Add thoughts and users to db
  await User.insertMany(users);
  await Thought.insertMany(thoughts);

  // Updated users with thought id's

  // Update users with friend id's

  console.table(users);
  console.table(thoughts);
  console.info('Database successfully seeded!');
  process.exit(0);
});


/* TODO - Find out if reactions to thoughts are intended to be restricted to friends only;
  if so, add filter/validation code
*/