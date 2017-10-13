const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const feathers = require('feathers');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');

const mongoDb = require('./database');
// const middleware = require('./middleware');
const services = require('./services'); // Client adapter, similar to a router/controller

const app = feathers();

app
  .configure(configuration())
  .options('*', cors())
  .use(cors())
  .use(helmet())
  .use(compress())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(feathers.static('build'))
  .configure(mongoDb)
  .configure(hooks())
  .configure(rest())
  // .configure(middleware)
  .configure(services);

module.exports = app;
