/**
 * 链式管道，
 * 先压缩，再将压缩后的文件内容，写入writeStream
 * 
 */
var fs = require('fs');
var zlib = require('zlib');

var readStream = fs.createReadStream("input.txt.gz");

readStream
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream("input.txt"));

console.log("解压完成.")