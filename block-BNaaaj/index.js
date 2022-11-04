console.log('Welcome to Nodejs');
var os = require('os');
var math =require('./index.js');
var filePath = path.join(-dirname,'file.md');
var freeM = os.freeM();
var cups = os.cups().length;
console.log(filePath,freeM,cups);
