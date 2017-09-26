const userService = require('./user');
const postService = require('./post');
const authService = require('./auth');

module.exports = function() {
  const app = this;

  // Register services!
  app
    .configure(authService)
    .configure(userService)
    .configure(postService);
};
