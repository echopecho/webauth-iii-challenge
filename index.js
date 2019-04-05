const server = require('./api/server.js');

const port = process.env.PORT || 5000;
server.listen(port, '0.0.0.0', () => {
  console.log(`The server is running on port: ${port}`);
})