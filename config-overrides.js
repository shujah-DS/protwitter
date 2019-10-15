const rewireLess = require('react-app-rewire-less');
const { injectBabelPlugin } = require('react-app-rewired');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

/* eslint-disable no-param-reassign */
module.exports = function override(config, env) {
  config = rewireLess.withLoaderOptions({
    modifyVars: { '@primary-color': '#1DA57A' },
    javascriptEnabled: true
  })(config, env);
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', style: true }],
    config
  );
  config.plugins = (config.plugins || []).concat([
    new LodashModuleReplacementPlugin({
      collections: true,
      paths: true,
      shorthands: true
    })
  ]);
  return config;
};
