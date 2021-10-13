const enum AppRoute {
Main = '/',
Login = '/login',
Favorites = '/favorites',
Property = '/offer/:id'
}

const enum AuthorizationStatus {
Auth = 'AUTH',
NoAuth = 'NO_AUTH',
}

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export {AppRoute, AuthorizationStatus, CITIES};
