const http = require('http');

const requestHandler = (req, res) => {
  if (req.url === "/") {
    res.end("Hola Carlos");
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
};

const server = http.createServer(requestHandler);

module.exports = server;
