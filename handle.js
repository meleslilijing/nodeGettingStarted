var querystring = require("querystring");

function start(response, postDate) {
	response.writeHead(200, {"Content-Type" : "text/html"});

	var body = '\
		<html>\
			<head>\
				<meta charset="utf-8"/>\
				<title>start</title>\
			</head>\
			<body>\
				<form action="/upload" method="post">\
					<textarea name="text" id="text" cols="30" rows="10"></textarea>\
					<input type="submit" value="submit text" />\
				</form>\
			</body>\
		</html>\
	';

	response.write(body);
	response.end();
} 

function upload(response, postDate) {
	response.writeHead(200, {"Content-Type" : "text/plain"});
	response.write("You have sent the text:");
	response.write(querystring.parse(postDate).text);
	response.end();
}

exports.start = start;
exports.upload = upload;
