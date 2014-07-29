
module.exports = function() {
    
    return {
        
        find: function( query, next ) {
            // Do database work here
            // e.g.
            // schema.find({color: 'blue'}).exec(next);
            // Sample response:
            next(null, {
                color: 'blue',
                food: 'pizza',
                city: 'New York'
            });
        }
        
    };
    
};