import {Offer, Comment} from '../types/types';
import {AuthorizationStatus, ErrorLoadingOkState} from '../const';

export enum ActionType {
  ChangeCity = 'main/city/ChangeCity',
  GetOffersList = 'main/offer/GetOffersList',
  ChangeOptionSorting = 'main/option-sorting/ChangeOptionSorting',
  LoadOffers = 'data/main/offers/LoadOffers',
  LoadOffer = 'data/room/offer/LoadOffer',
  LoadComments = 'data/room/comments/LoadComments',
  LoadNeighbours = 'data/room/offers/LoadNeighbours',
  LoadFavoriteOffers = 'data/favorite/offers/LoadFavoriteOffers',
  RequireAuthorization = 'user/requireAuthorization',
  Logout = 'user/Logout',
  ErrorPage = 'error404/ErrorPage',
  DataStatus = 'room/DataStatus',
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

export const loadComments = (comments: Comment[]) => ({
  type: ActionType.LoadComments,
  payload: comments,
} as const);

export const loadNeighbours = (offers: Offer[]) => ({
  type: ActionType.LoadNeighbours,
  payload: offers,
} as const);

export const loadFavoriteOffers = (offers: Offer[]) => ({
  type: ActionType.LoadFavoriteOffers,
  payload: offers,
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.Logout,
} as const);

export const errorPage = () => ({
  type: ActionType.ErrorPage,
} as const);

export const dataStatus = (status: ErrorLoadingOkState) => ({
  type: ActionType.DataStatus,
  payload: status,
} as const);


export type Actions =
ReturnType<typeof requireAuthorization> |
ReturnType<typeof requireLogout> |
ReturnType<typeof changeCity> |
ReturnType<typeof getOffersList> |
ReturnType<typeof changeOptionSorting> |
ReturnType<typeof loadOffers> |
ReturnType<typeof loadOffer> |
ReturnType<typeof loadComments> |
ReturnType<typeof loadNeighbours> |
ReturnType<typeof loadFavoriteOffers> |
ReturnType<typeof errorPage> |
ReturnType<typeof dataStatus>;


