const env = require("env2")('./config.env');
const https = require('https');

const makeRequest = (charityId, callback) => {
  const options = {
    host: 'api.justgiving.com',
    path: `/${process.env.API_ID}/v1/charity/${charityId}/`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  https.get(options, (response) => {
    let body = '';
    response.on('data', (d) => {
      body += d;
    });
    response.on('end', () => {
      const parsed = JSON.parse(body);
      const data = {
        charityName: parsed.name,
        charityDescription: parsed.description,
        logoUrl: parsed.logoUrl,
        charityWebsite: parsed.websiteUrl
      };
      callback(null, data);
    });
  });
};
module.exports = makeRequest;
