
module.exports = [
    {
        path: '/',
        method: 'get',
        controller: 'AppController',
        action: 'index'
    },
    {
        path: '/favorites',
        method: 'get',
        controller: 'FavoritesController',
        action: 'list'
    }
];