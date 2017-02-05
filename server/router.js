const Router = require('express').Router();
const charityRequest = require('./lib/charityrequest.js');
const donationRequest = require('./lib/donationrequest.js');
const Path = require('path');
const Url = require('url');

Router.get('/charityrequest', (request, reply) => {
  charityRequest(request.query.id, (err, data) => {
    if (err) { reply.send('there was an error'); }
    reply.send(data);
  });
});

Router.get('/donationrequest', (request, reply) => {
  donationRequest(request.query.id, (err, data) => {
    if (err) { reply.send('there was an error'); }
    reply.send(data);
  });
});

module.exports = Router;
