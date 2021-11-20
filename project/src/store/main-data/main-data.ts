import {CITIES, PlacesSortOptions} from '../../const';
import {Offer} from '../../types/types';
import {ActionType, Actions} from '../../store/action';
import {getOffersByCityName, createSortingOffers} from '../../utils/utils';

const START_CITY_INDEX = 0;

const initialCity = CITIES[START_CITY_INDEX];

type MainData = {
  city: string,
  offers: Offer[],
  activeOption: string,
  loadOffers: Offer[],
  isLoaded: boolean,
  mainOffers: Offer[],
}

const initalState: MainData = {
  city: initialCity,
  offers: getOffersByCityName([], initialCity),
  activeOption: PlacesSortOptions.Popular,
  loadOffers: [],
  isLoaded: false,
  mainOffers: [],
};

const mainData = (state = initalState, action: Actions): MainData => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, city: action.payload};
    case ActionType.GetOffersList:
      return {...state,
        mainOffers: getOffersByCityName(state.loadOffers, action.payload),
        offers: getOffersByCityName(state.loadOffers, action.payload)};
    case ActionType.ChangeOptionSorting:
      return {...state,
        activeOption: action.payload,
        offers: createSortingOffers(state.mainOffers, action.payload)};
    case ActionType.LoadOffers:
      return {...state, loadOffers: action.payload, isLoaded: true};
    default:
      return state;
  }
};

export {mainData};
