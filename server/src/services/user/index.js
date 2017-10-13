const service = require('feathers-mongoose');
const local = require('feathers-authentication-local');
const User = require('./models/userModel');

module.exports = function() {
  const app = this;
  const options = { Model: User };

  // Register service.
  app.use('/user', service(options));

  // Register hooks on service.
  app.service('/user').hooks({
    before: {
      /* Hash password before saving a new user to the database. */
      create: [local.hooks.hashPassword({ passwordField: 'password' })]
    }
  });
};
