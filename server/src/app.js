const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const path = require('path');

const feathers = require('feathers');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');
const socketio = require('feathers-socketio');

const middleware = require('./middleware');

// Client adapter.
// Similar to a router/controller which handles requests.
// Do work in here!
const services = require('./services');

const app = feathers();

app
  .configure(configuration())
  .use(feathers.static(path.resolve(__dirname, '../../build')))
  .use(cors())
  .use(helmet())
  .use(compress())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .configure(hooks())
  .configure(rest())
  .configure(socketio())
  .configure(middleware)
  .configure(services);

module.exports = app;
