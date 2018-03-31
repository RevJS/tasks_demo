
const clientConfig = require('./webpack.client.config');

const config = clientConfig();
config.entry = './src/client/client_standalone.tsx';
config.output.filename = 'client_standalone.js';
config.plugins = [];

module.exports = config;
