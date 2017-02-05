const Router = require('express').Router();
const charityRequest = require('./lib/charityrequest.js');
const Path = require('path');

Router.get('/request', (request, reply) => {
  charityRequest('183092', (err, data) => {
    if (err) { reply.send('there was an error'); }
    console.log(data);
    reply.send(data);
  });
});

module.exports = Router;
