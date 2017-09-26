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
      all: [auth.hooks.authenticate(['jwt', 'local'])]
    },
    after: {
      create: [
        hook => {
          hook.result.user = hook.params.user;
          delete hook.result.user.password;
          delete hook.result.user.posts;
        }
      ]
    }
  });
};
