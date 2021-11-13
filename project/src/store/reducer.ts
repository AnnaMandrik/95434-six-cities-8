import {CITIES, PlacesSortOptions, AuthorizationStatus, ErrorLoadingState} from '../const';
import {State} from '../types/types';
import {ActionType, Actions} from '../store/action';
import {getOffersByCityName, createSortingOffers} from '../utils/utils';

const START_CITY_INDEX = 0;

const initialCity = CITIES[START_CITY_INDEX];


const initalState: State = {
  city: initialCity,
  offers: getOffersByCityName([], initialCity),
  activeOption: PlacesSortOptions.Popular,
  loadOffers: [],
  isLoaded: false,
  authorizationStatus: AuthorizationStatus.NoAuth,
  mainOffers: [],
  comments: [],
  offer: ErrorLoadingState.Loading,
  neighboursOffer: [],
};

const reducer = (state: State = initalState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ErrorPage:
      return {...state, offer: ErrorLoadingState.Error};
    case ActionType.ClearOffer:
      return {...state, offer: ErrorLoadingState.Loading};
    case ActionType.RequireAuthorization:
      return {...state, authorizationStatus: action.payload};
    case ActionType.Logout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    case ActionType.ChangeCity:
      return {...state, city: action.payload};
    case ActionType.GetOffersList:
      return {...state,
        mainOffers: getOffersByCityName(state.loadOffers, action.payload),
        offers: getOffersByCityName(state.loadOffers, action.payload), isLoaded: true};
    case ActionType.ChangeOptionSorting:
      return {...state,
        activeOption: action.payload,
        offers: createSortingOffers(state.mainOffers, action.payload)};
    case ActionType.LoadOffers:
      return {...state, loadOffers: action.payload};
    case ActionType.LoadNeighbours:
      return {...state, neighboursOffer: action.payload};
    case ActionType.LoadOffer:
      return {...state, offer: action.payload};
    case ActionType.LoadComments:
      return {...state, comments: action.payload};
    default:
      return state;
  }
};

export {reducer};
