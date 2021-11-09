import {getOffersList, Actions, loadOffers} from './action';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { State} from '../types/types';
import { AxiosInstance } from 'axios';
import {adaptOfferToClient} from '../services/adapter';
// import { removeToken, saveToken } from '../services/token';
import { store } from '../index';
import { APIRoute } from '.././const';

import { City, Host } from '../types/types';

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

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get(APIRoute.Hotels);
    const entranceData = await data.map((offer: ServersOffer) => adaptOfferToClient(offer));
    dispatch(loadOffers(entranceData));
    dispatch(getOffersList(store.getState().city));
  };
