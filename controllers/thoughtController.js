// *****Import Modules*****
const Thought = require('../models/Thought');

module.exports = {
  // ***** Route - /api/thoughts *****
  // TODO - Get all thoughts
  getThoughts(req, res) {},
  /* TODO - Post/create a new thought,
    push created thought's _id to associated user's thoughts array field */
  createThought(req, res) {},
  // ***** Route - /api/thoughts/thoughtId *****
  // TODO - Get a single thought by its _id
  getOneThought(req, res) {},
  // TODO - Put/update a though by its _id
  updateThought(req, res) {},
  // TODO - Delete a thought by its _id
  deleteThought(req, res) {},
  // ***** Route - /api/thoughts/:thoughtId/reactions *****
  /* TODO - Post/create a reaction,
    store in a single thought's reactions array field */
  createReaction(req, res) {},
    // ***** Route - /api/thoughts/:thoughtId/reactions/:reactionId *****
  // TODO - Delete a reaction by the reaction's reactionId
  deleteReaction(req, res) {}
}