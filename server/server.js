const Express = require('express');
const Path = require('path');

const router = require('./router.js');

const server = Express();

//tell express to server static files, and where from
server.use(Express.static(Path.join(__dirname, '../dist')));

//registers our router, which is defined is modularised into router.js
server.use(router);

module.exports = server;
