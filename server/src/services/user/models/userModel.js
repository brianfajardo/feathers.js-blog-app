const mongoose = require('mongoose');
const moment = require('moment');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'post'
    }
  ],
  joinedAt: {
    type: String,
    default: moment().format('MMM Do YYYY')
  }
});

const User = mongoose.model('user', userSchema);

module.exports = User;
