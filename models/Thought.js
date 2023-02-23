// *****Import Modules*****
const { Schema, model } = require('mongoose');

// Model Schema
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }
)

// Initialize model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;