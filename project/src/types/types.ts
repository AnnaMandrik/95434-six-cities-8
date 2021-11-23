import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {Action} from 'redux';
import {OfferType, OffersButtonType} from '../const';
import {RootState} from '../store/root-reducer';


export type User = {
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

export type Offer = {
  bedrooms: number,
  city: {
    location: Location,
    name: string,
  },
  description: string,
  goods: string[],
  host: User,
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
  type: OfferType,
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
  type: OffersButtonType,
};

export type PointInMap = {
  lat: number,
  lng: number,
}


export type State = RootState;


export type AuthData = {
  email: string;
  password: string;
}


export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, RootState, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<RootState, AxiosInstance, Action>;
