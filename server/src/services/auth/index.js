const auth = require('feathers-authentication');
const local = require('feathers-authentication-local');
const jwt = require('feathers-authentication-jwt');

module.exports = function() {
  const app = this;

  app
    .configure(auth(app.get('auth')))
    .configure(local())
    .configure(jwt());

  // Hooks
  app.service('authentication').hooks({
    before: {
      create: [auth.hooks.authenticate(['jwt', 'local'])]
    }
  });
};
