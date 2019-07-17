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



 
