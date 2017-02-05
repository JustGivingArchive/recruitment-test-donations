const Router = require('express').Router();
const charityRequest = require('./lib/charityrequest.js');
const donationRequest = require('./lib/donationrequest.js');
const Path = require('path');

Router.get('/charityrequest', (request, reply) => {
  charityRequest('183092', (err, data) => {
    if (err) { reply.send('there was an error'); }
    reply.send(data);
  });
});

Router.get('/donationrequest', (request, reply) => {
  donationRequest('183092', (err, data) => {
    if (err) { reply.send('there was an error'); }
    reply.send(data);
  });
});

module.exports = Router;
