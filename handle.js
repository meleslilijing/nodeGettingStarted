var exec = require("child_porcess").exec;

function start(response) {
	console.log("Request handler 'start' was called.")

	sleep(10000, function() {
		response.writeHead(200, {"Content-Type": "text-plain"});
		response.write("Hello Start.");
		response.end();
	})	
}

function upload(response) {
	console.log("Request handler 'upload' was called.")
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello Upload.");
	response.end();
}

exports.start = start;
exports.upload = upload;

// utils
function sleep(milliSecond, callback) {
	var startTime = new Date().getTime();
	while(new Date().getTime() < startTime + milliSecond){};
	callback();
}