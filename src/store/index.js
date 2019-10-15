if (process.env.REACT_APP_ENV === 'prod') {
  module.exports = require('./config.prod');
} else {
  module.exports = require('./config.dev');
}
