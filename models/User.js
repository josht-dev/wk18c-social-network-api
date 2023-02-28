// *****Import Modules*****
const { Schema, model } = require('mongoose');

// Model Schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please use a valid email address.']
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
    }
  }
);

// Virtual to return user's friends count
userSchema.virtual('friendCount')
  .get(function () {
    return `${this.friends.length}`;
  });

// Initialize model
const User = model('user', userSchema);

module.exports = User;