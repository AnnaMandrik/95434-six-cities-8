import {getOffersList, loadOffers, loadOffer, requireAuthorization, requireLogout} from './action';
import {ThunkActionResult, AuthData} from '../types/types';
import {adaptOfferToClient} from '../services/adapter';
import {dropToken, saveToken} from '../services/token';
import {store} from '../index';
import {APIRoute, AuthorizationStatus} from '.././const';
import {ServersOffer} from '../types/types';
import {saveUserEmail, dropUserEmail} from '../services/user-email';


export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get(APIRoute.Hotels);
    const entranceData = await data.map((offer: ServersOffer) => adaptOfferToClient(offer));
    dispatch(loadOffers(entranceData));
    dispatch(getOffersList(store.getState().city));
  };

export const fetchOffersByIdAction = (offerId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const url = `${APIRoute.Hotels}/${offerId}`;
    const {data} = await api.get(url);
    const entranceData = adaptOfferToClient(data);
    dispatch(loadOffer(entranceData));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      });
  };

export const loginAction = ({email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const answer = await api.post(APIRoute.Login, {email, password});
    const {data} = answer;
    saveToken(data.token);
    saveUserEmail(data.email);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  };


export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dropUserEmail();
    dispatch(requireLogout());
  };
