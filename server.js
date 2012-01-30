var Http = require("http");

Http.createServer(function(req, res) {
    res.writeHead(200, {"content-type": "text/html"});
    res.end("<!doctype html><html><head><title>AmsterdamJS</title></head><body>Coming soon!</body></html>");
}).listen(process.env.PORT);
