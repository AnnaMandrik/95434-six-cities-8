import {Offer} from '../types/types';
import {AuthorizationStatus} from '../const';

export enum ActionType {
  ChangeCity = 'city/ChangeCity',
  GetOffersList = 'offer/GetOffersList',
  ChangeOptionSorting = 'option-sorting/ChangeOptionSorting',
  LoadOffers = 'data/main/offers/LoadOffers',
  LoadOffer = 'data/room/offer/LoadOffer',
  LoadComments = 'data/room/comments/LoadComments',
  RequireAuthorization = 'user/requireAuthorization',
  Logout = 'user/Logout',
}

export const changeCity = (city: string) => ({
  type: ActionType.ChangeCity,
  payload: city,
} as const);

export const getOffersList = (city: string) => ({
  type: ActionType.GetOffersList,
  payload: city,
} as const);

export const changeOptionSorting = (option: string) => ({
  type: ActionType.ChangeOptionSorting,
  payload: option,
} as const);

export const loadOffers = (offers: Offer[]) => ({
  type: ActionType.LoadOffers,
  payload: offers,
} as const);

export const loadOffer = (offers: Offer) => ({
  type: ActionType.LoadOffer,
  payload: offers,
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.Logout,
} as const);


export type Actions =
ReturnType<typeof requireAuthorization> |
ReturnType<typeof requireLogout> |
ReturnType<typeof changeCity> |
ReturnType<typeof getOffersList> |
ReturnType<typeof changeOptionSorting> |
ReturnType<typeof loadOffers> |
ReturnType<typeof loadOffer>;
