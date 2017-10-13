const service = require('feathers-mongoose');
const postModel = require('./models/postModel');

module.exports = function() {
  const app = this;
  const options = { Model: postModel };

  app.use('/post', service(options));
};
