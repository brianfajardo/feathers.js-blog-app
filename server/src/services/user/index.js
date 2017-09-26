const service = require('feathers-mongoose');
const local = require('feathers-authentication-local');
const User = require('./models/userModel');

module.exports = function() {
  const app = this;

  const options = {
    Model: User,
    lean: true, // Faster queries by returning plain objects instead of Mongoose models.
    paginate: { default: 1, max: 1 }
    // id, default is mongoose native `_id`
  };

  // Register service
  app.use('/user', service(options));

  // Register hooks on service
  app.service('/user').hooks({
    before: {
      create: [local.hooks.hashPassword({ passwordField: 'password' })]
    }
  });
};
