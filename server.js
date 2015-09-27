var http = require("http");
var url = require("url");

function start(route, handle) {
	
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;

		route(pathname, handle, respoSnse);
	}

	http.createServer(onRequest).listen(3000);
	console.log("node server is listenning 3000")
}

exports.start = start;