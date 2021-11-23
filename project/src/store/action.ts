import {createAction} from '@reduxjs/toolkit';
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
  RequireLogout = 'user/requireLogout',
  ErrorPage = 'error404/ErrorPage',
  DataStatus = 'room/DataStatus',
}

export const changeCity = createAction(
  ActionType.ChangeCity,
  (city: string) => ({payload: city}),
);

export const getOffersList = createAction(
  ActionType.GetOffersList,
  (city: string) => ({payload: city}),
);

export const changeOptionSorting = createAction(
  ActionType.ChangeOptionSorting,
  (option: string) => ({payload: option}),
);

export const loadOffers = createAction(
  ActionType.LoadOffers,
  (offers: Offer[]) => ({payload: offers}),
);

export const loadOffer =  createAction(
  ActionType.LoadOffer,
  (offers: Offer) => ({payload: offers}),
);

export const loadComments = createAction(
  ActionType.LoadComments,
  (comments: Comment[]) => ({payload: comments}),
);

export const loadNeighbours =  createAction(
  ActionType.LoadNeighbours,
  (offers: Offer[]) => ({payload: offers}),
);

export const loadFavoriteOffers =  createAction(
  ActionType.LoadFavoriteOffers,
  (offers: Offer[]) => ({payload: offers}),
);

export const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (authStatus: AuthorizationStatus) => ({payload: authStatus}),
);

export const requireLogout = createAction(ActionType.RequireLogout);

export const errorPage = createAction(ActionType.ErrorPage);

export const dataStatus =  createAction(
  ActionType.DataStatus,
  (status: ErrorLoadingOkState) => ({payload: status}),
);


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


