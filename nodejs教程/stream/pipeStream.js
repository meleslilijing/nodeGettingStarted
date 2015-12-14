/**
 * pipe
 * 同时建立readStream和writeStream，并将readStream的内容复制到writeStream中。
 * 
 */

var fs = require('fs');

var readStream = fs.createReadStream('input.txt');

var writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);

console.log("程序执行完毕!")