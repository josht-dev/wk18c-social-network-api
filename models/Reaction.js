// *****Import Modules*****
const { Schema, Types } = require('mongoose');

// Schema only
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => {
        // EX: jun 10, 2020 at 01:38pm
        return date.toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'medium' });
      }
    }
  },
  {
    toJSON: {
      getters: true
    },
    _id: false
  }
);

module.exports = reactionSchema;