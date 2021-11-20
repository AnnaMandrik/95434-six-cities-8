import {PointInMap} from './types/types';


const enum AppRoute {
Main = '/',
Login = '/login',
Favorites = '/favorites',
Property = '/offer/:id',
Error = '/error',
}

const enum AuthorizationStatus {
Auth = 'AUTH',
NoAuth = 'NO_AUTH',
}

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const enum OffersButtonType {
  Property = 'Property',
  Card = 'Card',
}

const FavoriteBtnProp = {
  Card: {className: 'place-card', width: '18', height: '19', type: OffersButtonType.Card},
  Property: {className: 'property', width: '31', height: '33', type: OffersButtonType.Property},
};


const STARS = [
  {score: 5, titleName: 'perfect'},
  {score: 4, titleName: 'good'},
  {score: 3, titleName: 'not bad'},
  {score: 2, titleName: 'badly'},
  {score: 1, titleName: 'terribly'},
];

const CitiesCoordinates: {[property: string]: PointInMap} = {
  amsterdam: {lat: 52.3809553943508, lng: 4.9},
  paris: {lat: 48.8534, lng: 2.3488},
  brussels: {lat: 50.8504, lng: 4.34878},
  hamburg: {lat: 53.55, lng: 10},
  cologne: {lat: 50.936, lng: 6.95},
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

const ReviewTextLength = {
  MAX: 300,
  MIN: 50,
};

const enum ErrorLoadingOkState {
  Error = 'Error',
  Loading = 'Loading',
  Ok = 'Ok',
}

const MIX_COUNT_IMG = 0;
const MAX_COUNT_IMG = 6;

const enum OfferType {
  Apartment = 'apartment',
  Room = 'room',
  House = 'house',
  Hotel = 'hotel',
}

const offerTypeToReadable = {
  [OfferType.Apartment]: 'Apartment',
  [OfferType.Room]: 'Private Room',
  [OfferType.House]: 'House',
  [OfferType.Hotel]: 'Hotel',
};


export {OfferType, MIX_COUNT_IMG, offerTypeToReadable, MAX_COUNT_IMG, ErrorLoadingOkState,
  ReviewTextLength, APIRoute, PlacesSortOptions, IconMapColour, CitiesCoordinates, STARS,
  FavoriteBtnProp, AppRoute, AuthorizationStatus, CITIES, OffersButtonType};
