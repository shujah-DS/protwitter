/* eslint-disable */
if (process.env.REACT_APP_ENV === 'prod') {
  module.exports = require('./prod');
} else if (process.env.REACT_APP_ENV === 'stage') {
  module.exports = require('./stage');
} else if (process.env.REACT_APP_ENV === 'qa') {
  module.exports = require('./qa');
} else if (process.env.REACT_APP_ENV === 'local') {
  module.exports = require('./local');
} else {
  module.exports = require('./dev');
}
/* eslint-enable */
