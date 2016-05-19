/*
  mymodule.js
  Josh Stallings
  5/7/2016

  Does the work for modular-filtered-ext-list. 
  Contains directory reading and filtering function
  Provides any default arguments and the definition of the function, 
  so that it can be called externally.
*/

var fs = require( 'fs');
var path = require( 'path' );
var newFilesArray = [];  

module.exports = function myModule ( f, e, c ) { 
  fs.readdir( f, function( err, files ) {	      
    if ( err ) return c( err ); 
    files.forEach( function( file) {
       if ( err ) return c( err );
       if (path.extname( file ) == '.' + e) { 
         newFilesArray.push( file );
       }; // end if
     });  
 c( null, newFilesArray );  
 }); 
 
}



 
