
var express = require('express'),
    app = express()
;


// Should be default
app.set( 'case sensitive routing', true );

// Log every route for convenience
app.use( function( req, res, next ) {
    console.log( req.method, req.url );
    next();
});

// Abstract all init & setup for less clutter
var bootstrap = new require('./bootstrap')( app );

// Setup all of our routes
bootstrap.setupRoutes();


//
app.listen( 8080, function() {
    console.log( "\n\ne4sample @ localhost:8080\n\n" );
});