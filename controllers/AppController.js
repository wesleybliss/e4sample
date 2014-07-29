
module.exports = function() {
    
    // Private scope
    // ...
    
    // Public scope
    return {
        
        index: function( req, res, next ) {
            console.log('AppController.index');
            res.send({ hello: 'world' });
        }
        
    };
    
};