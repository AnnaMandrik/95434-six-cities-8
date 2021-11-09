import {CITIES, PlacesSortOptions} from '../const';
// import {OFFERS} from '../mocks/offers';
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
  isOffersLoaded: false,
};

const reducer = (state: State = initalState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, city: action.payload};
    case ActionType.GetOffersList:
      return {...state, offers: getOffersByCityName(state.loadOffers, action.payload), isOffersLoaded: true};
    case ActionType.ChangeOptionSorting:
      return {...state, activeOption: action.payload, offers: createSortingOffers(state.offers, action.payload)};
    case ActionType.LoadOffers:
      return {...state, loadOffers: action.payload};
    default:
      return state;
  }
};

export {reducer};
