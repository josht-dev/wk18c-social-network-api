// *****Import Modules*****
const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

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
      default: Date.now,
      get: (date) => {
        // EX: jun 10, 2020 at 01:38pm
        return date.toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'medium' });
      }
    },
    username: {
      type: String,
      required: true
    },
    reactions: [Reaction]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
)

// Virtual property that returns reactions count
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
})

// Initialize model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;