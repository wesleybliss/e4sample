
module.exports = function() {
    
    // Private scope
    var model = new require('../models/FavoriteModel')();
    
    // Public scope
    return {
        
        list: function( req, res, next ) {
            model.find( 'something', function( err, data ) {
                if ( err ) {
                    res.send( 400, err );
                }
                else {
                    res.send( data );
                }
            });
        }
        
    };
    
};