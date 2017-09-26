const mongoose = require('mongoose');
const moment = require('moment');
const { Schema } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  keywords: {
    type: Array,
    required: true
  },
  createdAt: {
    type: String,
    default: moment().format('MMM Do YYYY')
  }
});

const Post = mongoose.model('post', postSchema);

module.exports = Post;
