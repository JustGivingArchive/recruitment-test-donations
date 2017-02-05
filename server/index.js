const Express = require('express');

const server = require('./server.js');

//runs the server
server.listen(3000, () => {
  console.log('listening on port 3000');
});
