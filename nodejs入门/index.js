var server = require("./server");
var router = require("./router");

// file upload node-module: ./formidable
// local file load node-module: fs
server.start(router.router);
