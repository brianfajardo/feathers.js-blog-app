const mongoose = require('mongoose');

const userService = require('./user');
const postService = require('./post');

module.exports = function() {
  const app = this;

  // Note: Must be run after feathers-configuration to have config variables available.
  mongoose.Promise = global.Promise;
  mongoose.connect(app.get('mongodb'));

  // Register service!
  app.configure(userService);
  app.configure(postService);
};
