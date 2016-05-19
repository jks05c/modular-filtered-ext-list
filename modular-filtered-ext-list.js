/*
  modular-filtered-ext-list.js
  Josh Stallings
  5/7/2016

  Prints results of the module 
  The function is called with any default arguments it recieves from
  the module and provides the missing arguments.

*/

var folder = process.argv[ 2 ];
var ext    = process.argv[ 3 ];
var myModule = require( './mymodule.js' );

myModule(folder, ext, function callback(err, files) {
  if ( err ) return console.err;
  files.forEach(function(file) {
    console.log(file);
  });
});
