
module.exports = function( app ) {
    
    var app = app;
    
    return {
        
        setupRoutes: function() {
            
            var routes = require('./routes');
            
            for ( var i in routes ) {
                
                console.log(
                    routes[i].method.toUpperCase(),
                    routes[i].path, ' -> ',
                    routes[i].controller + '.' + routes[i].action
                );
                
                // Get an instance of the relevant controller
                var controller = new require('./controllers/' + routes[i].controller)();
                
                /*
                Normal syntax here is:
                app.verb( function( req, res, next ) {
                    // res.send( something );
                });
                But since JS arrays/objects are so easily accessed,
                we can treat the route object as an associative array.
                */
                app[routes[i].method](
                    routes[i].path,
                    controller[routes[i].action]
                );
                
            }
            
        }
        
    };
    
};