enum AppRoute {
Main = '/',
Login = '/login',
Favorites = '/favorites',
Property = '/offer/:id'
}

enum AuthorizationStatus {
Auth = 'AUTH',
NoAuth = 'NO_AUTH',
}

export {AppRoute, AuthorizationStatus};
