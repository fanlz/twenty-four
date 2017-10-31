const prod = require('./webpack/webpack.prod.js');
const dev = require('./webpack/webpack.dev.js');

let conf = dev;

if (process.env.NODE_ENV === 'production') {
    conf = prod;
}

module.exports = conf;
