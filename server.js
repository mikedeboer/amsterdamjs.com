var Fs = require("fs");
var Http = require("http");

// Detect if we're running as root or not
var isRoot = !process.getuid();
if (isRoot) {
    // Lets change to the owner of this file, whoever that may be
    var stat = Fs.statSync(__filename);
    console.log("Changing gid to " + stat.gid);
    process.setgid(stat.gid);
    console.log("Changing uid to " + stat.uid);
    process.setuid(stat.uid);
}

process.title ="amsterdamjs.com";

var PORT = process.env.PORT || 8000;

Http.createServer(function(req, res) {
    res.writeHead(200, {"content-type": "text/html"});
    res.end("<!doctype html><html><head><title>AmsterdamJS</title></head><body>Coming soon!</body></html>");
}).listen(PORT);

console.log("Server %s listening at http://localhost" + (PORT === 80 ? "" : ":" + PORT) + "/", process.title);
