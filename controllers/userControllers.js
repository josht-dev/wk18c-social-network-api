// *****Import Modules*****
const { User, Thought } = require('../models');

module.exports = {
  // *****Route - /api/users *****
  // Get all users
  getUsers(req, res) {
    User.find()
    .select('-__v')
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
  },
  // Post/create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // ***** Route - /api/users/:userId *****
  /* Get a single user by its _id,
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
  // Put/update a user by its _id
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'That user could not be found!' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // Delete a user by its _id
  // BONUS - Remove user's associated thoughts when deleted
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'That user could not be found!' })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() => res.json({ message: 'User and associated thoughts deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // ***** Route - /api/users/:userId/friends/:friendId *****
  // Post/create to add a new friend to user's friend list
  createFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'This user could not be found!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // TODO - Delete friend from user's friend list
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
    .then((user) => {
      !user
        ? res.status(404).json({ message: 'This user could not be found!' })
        : res.json(user)
    })
    .catch((err) => res.status(500).json(err));
  }
}