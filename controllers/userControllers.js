// *****Import Modules*****
const User = require('../models/User');

module.exports = {
  // *****Route - /api/users *****
  // TODO - Get all users
  getUsers(req, res) {
    User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
  },
  // TODO -Post/create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // ***** Route - /api/users/:userId *****
  /* TODO - Get a single user by its _id,
    populate thought and friend data */
  getOneUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'That user could not be found!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // TODO - Put/update a user by its _id
  updateUser(req, res) {},
  // TODO - Delete a user by its _id
  // TODO - BONUS - Remove user's associated thoughts when deleted
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'That user could not be found!' })
          : Application.deleteMany({ _id: { $in: user.applications } })
      )
      .then(() => res.json({ message: 'User and associated thoughts deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // ***** Route - /api/users/:userId/friends/:friendId *****
  // TODO - Post/create to add a new friend to user's friend list
  createFriend(req, res) {},
  // TODO - Delete friend from user's friend list
  deleteFriend(req, res) {}
}