/**
 * 从流中读取数据
 * 流事件:
 * 		data
 * 		end
 * 		error
 * 		finish
 */

var fs = require('fs');
// var data = "It's a readStream demo on nodejs.";
var data = "";

var readStream = fs.createReadStream('output.txt');

readStream.setEncoding('UTF8');

readStream.on('data', function(chunk) {
	data += chunk;
});

readStream.on('end', function() {
	console.log(data);
});

readStream.on('error', function() {
	console.log(err.stack);
})

console.log("The program is over.");