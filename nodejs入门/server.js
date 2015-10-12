var PORT = 3000;
var http = require("http");
var url = require("url");

function start(router) {
	function onRequest(request, response) {
		console.log("Request for node server.");

		var pathname = url.parse(request.url).pathname;

		var postData = "";
		request.setEncoding("utf-8");
		
		request.addListener("data", function(postdataChunk) {
			postData += postdataChunk;
		});

		request.addListener("end", function() {
			router(response, pathname, postData);
		});
	}

	http.createServer(onRequest).listen(3000||PORT);
	console.log("node server is listening "+ 3000 || PORT);
}

exports.start = start;
