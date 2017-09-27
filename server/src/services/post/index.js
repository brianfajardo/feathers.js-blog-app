const service = require('feathers-mongoose');
const postModel = require('./models/postModel');

module.exports = function() {
  const app = this;

  const options = {
    Model: postModel,
    lean: true,
    pagination: { default: 50, max: 50 }
  };

  app.use('/post', service(options));

  app.service('/post').hooks({
    before: {
      create: [
        hook => {
          //
        }
      ]
    }
  });
};
