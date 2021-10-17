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

const FavoriteBtnProp = {
  CARD: {className: 'place-card', width: '18', height: '19'},
  PROPERTY: {className: 'property', width: '31', height: '33'},
};

const enum TypeOfferCard {
  Main = 'Main',
  Favorite = 'Favorite'
}

const STARS = [
  {score: '5', titleName: 'perfect'},
  {score: '4', titleName: 'good'},
  {score: '3', titleName: 'not bad'},
  {score: '2', titleName: 'badly'},
  {score: '1', titleName: 'terribly'},
];


export {STARS, TypeOfferCard, FavoriteBtnProp, AppRoute, AuthorizationStatus, CITIES};
