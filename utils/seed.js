// *****Import Modules*****
const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { findOneAndUpdate } = require('../models/User');
// Not user if I will need functions from data.js
const { 
  generateUserObj, 
  generateThoughtObj, 
  generateReactionObj 
} = require('./data');

// Connection validation
connection.on('error', (err) => err);

// test
/*
async function updateUser(filter, update) {
  await User.findOneAndUpdate(filter, update);
}
*/

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

  const userDocs = await User.find();
  const thoughtDocs = await Thought.find();

  // Updated users with friend and thought id's
  for (let x = 0; x <= users.length-1; x++) {
    // Get random number of friends
    let randomNum = Math.floor(Math.random() * 3);
    // Store current friend usernames to check for duplicates
    let friends = [];

    // Generate a random number of friends
    for (let i = 0; i <= randomNum; i++) {
      // Generate random friend index
      let randomIndex = Math.floor(Math.random() * users.length);
      let newFriend = users[randomIndex].username;
      // Check for duplicate friends
      let noDuplicate = !friends.includes(newFriend);
      // Check for user in randomIndex
      if (randomIndex === x || !noDuplicate) {
        i--;
        continue;
      } else {
        friends.push(newFriend);
      }
    }

    // Get friend id's to add to user db entry
    let friendIds = friends.map(friend => {
      let getDbObj = userDocs.find((user => { return user.username = friend }));
      return getDbObj.id;
    });

    // Get thought id's to add to the user db entry
    let thoughtIds = [];
    thoughtDocs.forEach(thought => {
      if (thought.username === users[x].username) {
        thoughtIds.push(thought.id);
      }
    });

    // Update user db entry
    let filter = { username: users[x].username };
    let update = { friends: friendIds, thoughts: thoughtIds };
    await User.findOneAndUpdate(filter, update);
    //updateUser(filter, update);

    /*
    console.info('Friends: ');
    console.info(friendIds);
    console.info('Thoughts: ');
    console.info(thoughtIds);
    */

  }

  console.table(users);
  console.table(thoughts);
  console.info('Database successfully seeded!');
  process.exit(0);
});


/* TODO - Find out if reactions to thoughts are intended to be restricted to friends only;
  if so, add filter/validation code
*/