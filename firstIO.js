var fs = require ('fs')


var k = fs.readFile(process.argv[2]).toString().split('\n').length;

console.log(k);