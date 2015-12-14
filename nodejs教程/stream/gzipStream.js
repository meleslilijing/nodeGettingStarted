/**
 * 链式管道，
 * 先压缩，再将压缩后的文件内容，写入writeStream
 * 
 */
var fs = require('fs');
var zlib = require('zlib');

var readStream = fs.createReadStream("input.txt");

readStream
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream("input.txt.gz"));

console.log("压缩完成.")