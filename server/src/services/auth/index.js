const auth = require('feathers-authentication');
const local = require('feathers-authentication-local');
const jwt = require('feathers-authentication-jwt');

module.exports = function() {
  const app = this;

  /*
    app.configure() chain:
    1. Setup server side authentication, requires auth key from config.
    2. Enable local authentication strategy for feathers-authentication (Passport)
    3. Enable JWT authentication strategy for feathers-authentication (Passport)
  */

  app
    .configure(auth(app.get('auth'))) /* Set key as a Heroku variable in production */
    .configure(local())
    .configure(jwt());

  // Hooks
  app.service('authentication').hooks({
    before: {
      /* Setup a hook to only allow valid JWTs or successful
         local auth to authenticate and get new JWT access tokens */
      all: [auth.hooks.authenticate(['jwt', 'local'])]
    },
    after: {
      create: [
        /* After the user is saved to the database, in the server response,
           remove user password and associated posts from the hook.result object */
        hook => {
          hook.result.user = hook.params.user;
          hook.result.user.password = null;
          hook.result.user.posts = null;
        }
      ]
    }
  });
};
