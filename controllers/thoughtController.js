// *****Import Modules*****
const { Thought, User } = require('../models');

module.exports = {
  // ***** Route - /api/thoughts *****
  // TODO - Get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .select('-__v')
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  /* TODO - Post/create a new thought,
    push created thought's _id to associated user's thoughts array field */
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
  // ***** Route - /api/thoughts/thoughtId *****
  // TODO - Get a single thought by its _id
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
  // TODO - Put/update a though by its _id
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
  // TODO - Delete a thought by its _id
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
  /* TODO - Post/create a reaction,
    store in a single thought's reactions array field */
  createReaction(req, res) {},
    // ***** Route - /api/thoughts/:thoughtId/reactions/:reactionId *****
  // TODO - Delete a reaction by the reaction's reactionId
  deleteReaction(req, res) {}
}