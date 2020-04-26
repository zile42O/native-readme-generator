'use strict';
//# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
var fs = require('fs');
var util = require('util');
var pawnScanner = require('./lib/readme-gen');

if (process.argv.length !== 3) {
  console.error('Usage: start.js <dirname>');

  process.exit(1);
} else if (!fs.existsSync(process.argv[2])) {
  console.error('Error: Invalid directory given');

  process.exit(1);
}

var stats = fs.statSync(process.argv[2]);

if (!stats.isDirectory()) {
  console.error('Error: Invalid directory given');

  process.exit(1);
}

try 
{ 
 
  console.time('generator-time');
  var output = pawnScanner.scanDir(process.argv[2]);
 
  console.log('\n');
  console.timeEnd('generator-time');
  console.log('   _/  _/    _/_/_/       _/_/_/_/\n' +
             '   _/  _/    _/  _/       _/    _/\n'+
            '  _/_/_/_/      _/        _/    _/\n'+
            '     _/       _/         _/    _/\n'+
            '   _/      _/_/_/_/      /_/_/_/  Productions\n\n\n # Author: Aleksandar Zivkovic (zile42O)\n # Date 7.19.2019\n # Version 1.1.0');


} 
catch (e) 
{
  throw e;
  process.exit(1);
}

//# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 