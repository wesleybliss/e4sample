
module.exports = function() {
    
    // Private scope
    // ...
    
    // Public scope
    return {
        
        list: function( req, res, next ) {
            res.send({test:'yes'});
            //res.send([1, 2, 3]);
            
        }
        
    };
    
};