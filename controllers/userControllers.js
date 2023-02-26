// *****Import Modules*****
const User = require('../models/User');

module.exports = {
  // *****Route - /api/users *****
  // TODO - Get all users
  getUsers(req, res) {},
  // TODO -Post/create a new user
  createUser(req, res) {},
  // ***** Route - /api/users/:userId *****
  /* TODO - Get a single user by its _id,
    populate thought and friend data */
  getOneUser(req, res) {},
  // TODO - Put/update a user by its _id
  updateUser(req, res) {},
  // TODO - Delete a user by its _id
  // TODO - BONUS - Remove user's associated thoughts when deleted
  deleteUser(req, res) {},
  // ***** Route - /api/users/:userId/friends/:friendId *****
  // TODO - Post/create to add a new friend to user's friend list
  createFriend(req, res) {},
  // TODO - Delete friend from user's friend list
  deleteFriend(req, res) {}
}