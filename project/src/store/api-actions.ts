import {getOffersList, loadOffers, loadOffer, requireAuthorization,
  requireLogout, loadNeighbours, loadComments, dataStatus,
  loadFavoriteOffers} from './action';
import {ThunkActionResult, AuthData, Offer, Comment} from '../types/types';
import {adaptOfferToClient, adaptCommentToClient} from '../services/adapter';
import {dropToken, saveToken} from '../services/token';
import {APIRoute, AuthorizationStatus, ErrorLoadingOkState} from '.././const';
import {saveUserEmail, dropUserEmail} from '../services/user-email';


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

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, getState, api): Promise<void> => {
    const {data} = await api.get(APIRoute.Hotels);
    const entranceData = await data.map((offer: Offer) => adaptOfferToClient(offer));
    dispatch(loadOffers(entranceData));
    dispatch(getOffersList(getState().MainData.city));
  };

export const fetchNeighborsOffersAction = (offerId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get(`${APIRoute.Hotels}/${offerId}${APIRoute.Nearby}`);
    const entranceData = await data.map((offer: Offer) => adaptOfferToClient(offer));
    dispatch(loadNeighbours(entranceData));
  };


export const fetchOfferByIdAction = (offerId: number, cleanStatus: boolean): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    if (cleanStatus === true) {
      dispatch(dataStatus(ErrorLoadingOkState.Loading));
    }
    const url = `${APIRoute.Hotels}/${offerId}`;
    const {data} = await api.get(url);
    const entranceData = adaptOfferToClient(data);
    dispatch(dataStatus(ErrorLoadingOkState.Ok));
    dispatch(loadOffer(entranceData));
  };


export const fetchCommentsAction = (offerId: number): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.get<Comment[]>(`${APIRoute.Comments}/${offerId}`);
    const entranceComment = await data.map((comment) => adaptCommentToClient(comment));
    dispatch(loadComments(entranceComment));
  };


type CommentsArguments = {
  offerId: number,
  review: string,
  rating: number,
  clearComment: () => void,
  notifyError: () => void,
  unblockForm: () => void,
}

export const postCommentAction = ({offerId, review, rating, clearComment, notifyError, unblockForm}: CommentsArguments): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.post<Comment[]>(`${APIRoute.Comments}/${offerId}`, {comment: review, rating})
      .then((result) => {
        const {data} = result;
        const outgoingComment = data.map((someComment) => adaptCommentToClient(someComment));
        dispatch(loadComments(outgoingComment));
        clearComment();
      })
      .catch(notifyError)
      .finally(unblockForm);
  };


export const fetchFavoriteOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.get<Offer[]>(APIRoute.Favorite);
    const userOffers = await data.map((someOffer) => adaptOfferToClient(someOffer));
    dispatch(loadFavoriteOffers(userOffers));
  };

export const postFavoriteStatus = (offerId: number, status: number, propertyId = 0): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.post(`${APIRoute.Favorite}/${offerId}/${status}`);
    dispatch(fetchOffersAction());
    if (propertyId) {
      dispatch(fetchOfferByIdAction(propertyId, false));
    }
    dispatch(fetchFavoriteOffersAction());
  };
