var folder = process.argv[ 2 ];
var ext    = process.argv[ 3 ];
var myModule = require( './mymodule.js' );

myModule(folder, ext, function callback(err, files) {
  if ( err ) return console.err;
  files.forEach(function(file) {
    console.log(file);
  });
});
