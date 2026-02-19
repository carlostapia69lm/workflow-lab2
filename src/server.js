const http = require('http');

const requestHandler = (req, res) => {
  if (req.url === "/") {
    res.end("Bienvenido a la pagina WEB de DOCKER Y KUBERNETES PROFESSIONAL");
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
};

const server = http.createServer(requestHandler);

module.exports = server;
