import {PointInMap} from './types/types';


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

const STARS = [
  {score: '5', titleName: 'perfect'},
  {score: '4', titleName: 'good'},
  {score: '3', titleName: 'not bad'},
  {score: '2', titleName: 'badly'},
  {score: '1', titleName: 'terribly'},
];

const CitiesCoordinates: {[property: string]: PointInMap} = {
  amsterdam: {lat: 52.3809553943508, lng: 4.939309666406198},
  paris: {lat: 48.8534, lng: 2.3488},
  brussels: {lat: 50.8504, lng: 4.34878},
  hamburg: {lat: 53.5753, lng: 10.0153},
  cologne: {lat: 50.8936, lng: 7.0731},
  dusseldorf: {lat: 51.2217, lng: 6.77616},
};

const enum IconMapColour {
  Default = './img/pin.svg',
  Active = './img/pin-active.svg',
}

const PlacesSortOptions: {[property: string]: string} = {
  Popular: 'Popular',
  PriceLowToHight:'Price: low to high',
  PriceHightToLow: 'Price: high to low',
  TopRated: 'Top rated first',
};

const enum APIRoute {
  Hotels = '/hotels',
  Nearby = '/nearby',
  Favorite = '/favorite',
  Status = '/:status',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout'
}


export {APIRoute, PlacesSortOptions, IconMapColour, CitiesCoordinates, STARS, FavoriteBtnProp, AppRoute, AuthorizationStatus, CITIES};
