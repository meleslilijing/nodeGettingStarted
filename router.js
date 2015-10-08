var handle = require("./handle");

var handle = {
	"/": handle.start,
	"/upload": handle.upload
};

function router(response, pathname, postDate) {
	if(typeof handle[pathname] === "function") {
		handle[pathname](response, postDate);
	} else {
		// 404
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 Not Found.");
		response.end();
	}
}

exports.router = router;
