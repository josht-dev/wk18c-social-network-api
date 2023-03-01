// *****Import Modules*****
const { Thought, User } = require('../models');

module.exports = {
  // ***** Route - /api/thoughts *****
  // Get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .select('-__v')
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  /* Post/create a new thought,
    push created thought's _id to associated user's thoughts array field */
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { username: req.body.username },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res.status(404).json({
            message: 'Thought created, but user with that id is lost!',
          })
          : res.json({ message: `The thought, ID: ${user.thoughts[user.thoughts.length - 1]} has been formed!`})
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // ***** Route - /api/thoughts/thoughtId *****
  // Get a single thought by its _id
  getOneThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'That thought could not be found!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Put/update a though by its _id
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'Could not find your thought!' })
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // Delete a thought by its _id
  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'That thought could not be found!' })
          : User.findOneAndUpdate(
            { thoughts: req.params.thoughtId },
            { $pull: { thoughts: req.params.thoughtId } },
            { new: true }
          )
      )
      .then((user) =>
        !user
          ? res.status(404).json({
            message: 'Thought found but no user with this id!',
          })
          : res.json({ message: 'Thought successfully deleted!' })
      )
      .catch((err) => res.status(500).json(err));
  },
  // ***** Route - /api/thoughts/:thoughtId/reactions *****
  /* Post/create a reaction,
    store in a single thought's reactions array field */
  createReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'The thought was not found!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
    // ***** Route - /api/thoughts/:thoughtId/reactions/:reactionId *****
  // Delete a reaction by the reaction's reactionId
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: {reactionId: req.params.reactionId} } },
      { new: true }
    )
      .then((thought) => {
        !thought
          ? res.status(404).json({ message: 'This thought was not found!' })
          : res.json(thought)
      })
      .catch((err) => res.status(500).json(err));
  }
}