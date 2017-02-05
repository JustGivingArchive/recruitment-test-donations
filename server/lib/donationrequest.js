const env = require("env2")('./config.env');
const https = require('https');

const makeRequest = (charityId, callback) => {
  const options = {
    host: 'api.justgiving.com',
    path: `/${process.env.API_ID}/v1/charity/${charityId}/donations`,
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
      console.log(parsed);
      const data = parsed.donations;
      callback(null, data);
    });
  });
};
module.exports = makeRequest;
