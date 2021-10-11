const http = require("http");

const port = 3000;

const server = htpp.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain")
    res.end("Hello World")
});

server.listen(port, () => {
    console.log("Server running on port: ${port}")
});