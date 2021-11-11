import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {AuthorizationStatus} from '../const';
import {Actions} from '../store/action';

export type Host = {
  avatarUrl: string,
  id: number,
  isPro: boolean,
  name: string,
}

export type Location = {
  latitude: number,
  longitude: number,
  zoom: number,
}

export type City = {
  location: Location
  name: string,
}

export type Offer = {
  bedrooms: number,
  city: City,
  description: string,
  goods: string[],
  host: Host,
  id: number,
  images: string[],
  isFavorite: boolean,
  isPremium: boolean,
  location: Location,
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: string,
}

export type User = {
  avatarUrl: string,
  id: number,
  isPro: boolean,
  name: string,
}

export type Comment = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: User,
}

export type ButtonFavorite = {
  className: string,
  width: string,
  height: string,
};

export type PointInMap = {
  lat: number,
  lng: number,
}


export type State = {
  city: string,
  offers: Offer[],
  activeOption: string,
  loadOffers: Offer[],
  isOffersLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
  mainOffers: Offer[],
}


export type AuthData = {
  email: string;
  password: string;
}

export type ServersOffer = {
  bedrooms: number,
  city: City,
  description: string,
  goods: string[],
  host: Host,
  id: number,
  images: string[],
  'is_favorite': boolean,
  'is_premium': boolean,
  location: Location,
  'max_adults': number,
  'preview_image': string,
  price: number,
  rating: number,
  title: string,
  type: string,
}

type ServerUser = {
  avatarUrl: string,
  id: number,
  'is_pro': boolean,
  name: string,
}

export type ServersComment = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: ServerUser,
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
