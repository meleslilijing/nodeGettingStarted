/**
 * 向流写入数据 demo
 */

var fs = require('fs');
var data = "It's a writeStream demo on nodejs."

var writeStream = fs.createWriteStream('output.txt');

writeStream.write(data, 'UTF8');

writeStream.end();

writeStream.on('finish', function() {
	console.log("写入完成");
})

writeStream.on('error', function() {
	console.log(err.stack);
})

console.log("The program is over.");